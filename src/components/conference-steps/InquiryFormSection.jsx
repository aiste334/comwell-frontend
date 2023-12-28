import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react'; 
import FormStepGroup from '../ui/form-steps/FormStepGroup';
import FormStep from '../ui/form-steps/FormStep';
import ConferenceInquiryDrawerContent from '../drawers/conference-selection/ConferenceInquiryDrawerContent';
  import InquiryInfoContent from './InquiryInfoContent';
  import ConferenceInfoHeader from '../drawers/conference-selection/ConferenceInfoHeader';
  import BookingStepLayout from '../booking-steps/BookingStepLayout';
  import InquiryConfirmation from './InquiryConfirmation';

  function InquiryFormSection({
    selectedRoom,
    selectedHotel,
    rooms,
    dates,
    times,
    onConferenceClick,
    conferenceParticipantCount,
    formSteps,
    closeBookingDrawer,
    closeDrawer,
    hotels,
    selectedConference
  }) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [comment, setComment] = useState('');
    const [company, setCompany] = useState('');
    const [department, setDepartment] = useState('');
    const [nameOfMeeting, setNameOfMeeting] = useState('');

    const [isAccommodationInterested, setIsAccommodationInterested] = useState(false);
    const [agreeWithTC, setAgreeWithTC] = useState(false);
    const [signUpForNewsletter, setSignUpForNewsletter] = useState(false);

    const { currentStep, next, prev, reset } = formSteps

    const infoHeader = (
      <ConferenceInfoHeader conferenceParticipantCount = {conferenceParticipantCount} dates={dates} />    
    )

    const { data: session } = useSession();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
      if (session) {
        setFullName(session.user.name || '');
        setEmail(session.user.email || '');
        setPhoneNumber(session.user.phoneNumber || '');
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }

    }, [session, setFullName, setEmail, setPhoneNumber]);

    const handleBook = async () => {
      await createBooking()
      next()
    }

    const createBooking = async () => {
      console.log("times: " + JSON.stringify(times));
      try {
        const bookingData = {
          user: session?.user.id, 
          hotels: [selectedHotel._id], 
          dates: {
            start: dates.start,
            end: dates.end,
          },
          times: {
            start: times.start,
            end: times.end,
          },
          numberOfParticipants: conferenceParticipantCount,
          interestedInAccommodation: isAccommodationInterested, 
          bookersInfo: {
            name: fullName,
            email,
            phoneNumber,
            comment,
            department,
            company,
            nameOfMeeting
          },
        };
    
        const response = await fetch('http://localhost:4000/conferences', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookingData),
        });
    
        if (!response.ok) {
          throw new Error('Booking creation failed');
        }
    
        const result = await response.json();
        console.log('Booking created successfully:', result);
      } catch (error) {
        console.  error('Error creating booking:', error.message);
      }
    }

  return (
    <FormStepGroup currentStep={currentStep}>
      <FormStep onReturn={() => { closeDrawer(); reset() }}>
        <BookingStepLayout infoHeader={infoHeader} >
          <ConferenceInquiryDrawerContent
            selectedHotel={selectedHotel}
            selectedConference={selectedConference}
            onConferenceClick={onConferenceClick}
            hotels = {hotels}
          />
        </BookingStepLayout>
      </FormStep>
      <FormStep onReturn={prev}>
        <BookingStepLayout
          bottomButtonText='Request Now'
          clickNext={handleBook}
          selectedConference={selectedConference}
          infoHeader={infoHeader}
          disabled={!loggedIn}
        >
          <InquiryInfoContent
            dates={dates}
            times={times}
            email={email}
            fullName={fullName}
            phoneNumber={phoneNumber}
            setEmail={setEmail}
            setFullName={setFullName}
            setComment={setComment}
            setCompany={setCompany}
            setNameOfMeeting={setNameOfMeeting}
            setDepartment = {setDepartment}
            setPhoneNumber={setPhoneNumber}
            conferenceParticipantCount = {conferenceParticipantCount}
            selectedHotel={selectedHotel} 
            company={company}
            department={department}
            nameOfMeeting={nameOfMeeting}
            comment={comment}
            isAccommodationInterested={isAccommodationInterested}
            setIsAccommodationInterested={setIsAccommodationInterested}
            agreeWithTC={agreeWithTC}
            setAgreeWithTC={setAgreeWithTC}
            setSignUpForNewsletter={setSignUpForNewsletter}
            signUpForNewsletter={signUpForNewsletter}
          />
        </BookingStepLayout>
      </FormStep>
      <FormStep onReturn={prev}>
        <BookingStepLayout
          bottomButtonText='Gå til forside'
          clickNext={closeBookingDrawer}
       >
          <InquiryConfirmation
            selectedHotel={selectedHotel}
            dates={dates}
            times={times}
            conferenceParticipantCount = {conferenceParticipantCount}
          />
        </BookingStepLayout>
      </FormStep>
    </FormStepGroup>
  );
}

export default InquiryFormSection;
