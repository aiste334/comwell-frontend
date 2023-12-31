import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react'; 
  import BookingStepLayout from '../booking-steps/BookingStepLayout';
  import FormStep from '../ui/form-steps/FormStep';
  import FormStepGroup from '../ui/form-steps/FormStepGroup';
  import PartyDrawerContent from '../drawers/party-selection/PartyDrawerContent';
  import PartyInfoHeader from './PartyInfoHeader'
import PartyInfoContent from './PartyInfoContent';
import PartyConfirmation from './PartyConfirmation';

  function PartyFormSection({
    selectedRoom,
    selectedHotel,
    rooms,
    dates,
    times,
    onPartyClick,
    partyParticipantCount,
    formSteps,
    closeBookingDrawer,
    closeDrawer, 
    hotels,
    arrangement
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
      <PartyInfoHeader partyParticipantCount = {partyParticipantCount} dates={dates} selectedHotel={selectedHotel} arrangement={arrangement} />    
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
      console.log("Preparing to create booking...");
    
      // Logging the current state values for debugging
      console.log("User Session Data: ", session?.user);
      console.log("Arrangement: ", arrangement);
      console.log("Party Participant Count: ", partyParticipantCount);
      console.log("Selected Hotel ID: ", selectedHotel?._id);
      console.log("Dates: ", dates);
      console.log("Times: ", times);
      console.log("Interested in Accommodation: ", isAccommodationInterested);
      console.log("Booker's Info: ", {fullName, email, phoneNumber, comment, company});
    
      try {
        const bookingData = {
          user: session?.user.id, 
          arrangement: arrangement.id, // Assuming this is correct as per your data structure
          numberOfParticipants: partyParticipantCount,
          hotels: [selectedHotel._id],
          dates: {
            start: dates.start,
            end: dates.end,
          },
          interestedInAccommodation: isAccommodationInterested,
          bookersInfo: {
            fullName: fullName, // Changed from 'name' to 'fullName' to match backend expectation
            email,
            phoneNumber,
            comment,
            company: company || 'N/A', // Providing a default value if company is empty
          },
        };
    
        // Logging the booking data being sent
        console.log("Booking Data being sent: ", bookingData);
    
        const response = await fetch('http://localhost:4000/parties', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bookingData),
        });
        
      } catch (error) {
        console.error('Error creating booking:', error.message);
      }
    }

   
    
  return (
    <FormStepGroup currentStep={currentStep}>
      <FormStep onReturn={() => { closeDrawer(); reset() }}>
        <BookingStepLayout infoHeader={infoHeader} >
          <PartyDrawerContent
            selectedHotel={selectedHotel}
            selectedRoom={selectedRoom}
            hotels={hotels}
            onPartyClick={onPartyClick}
          />
        </BookingStepLayout>
      </FormStep>
      <FormStep onReturn={prev}>
        <BookingStepLayout
          bottomButtonText='Request Now'
          clickNext={handleBook}
          selectedRoom={selectedRoom}
          infoHeader={infoHeader}
          disabled={!loggedIn || !agreeWithTC}
        >
          <PartyInfoContent
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
            partyParticipantCount = {partyParticipantCount}
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
            arrangement={arrangement}
          />
        </BookingStepLayout>
      </FormStep>
      <FormStep onReturn={prev}>
        <BookingStepLayout
          bottomButtonText='Gå til forside'
          clickNext={closeBookingDrawer}
       >
          <PartyConfirmation
            selectedHotel={selectedHotel}
            dates={dates}
            times={times}
            partyParticipantCount = {partyParticipantCount}
            arrangement={arrangement}
          />
        </BookingStepLayout>
      </FormStep>
    </FormStepGroup>
  );
}

export default PartyFormSection;