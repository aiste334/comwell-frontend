import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react'; 
import FormStepGroup from '../ui/form-steps/FormStepGroup';
import FormStep from '../ui/form-steps/FormStep';
import BookingStepLayout from './BookingStepLayout';
import RoomBookingDrawerContent from '../drawers/room-selection/RoomBookingDrawerContent';
import ConfirmationSection from './ConfirmationSection';
import GuestInfoContent from './GuestInfoContent';
import PaymentInfoContent from './PaymentInfoContent';
import BookingInfoHeader from '@/src/components/drawers/room-selection/BookingInfoHeader';

function BookingFormSection({
  selectedRoom,
  selectedHotel,
  rooms,
  dates,
  onRoomCardClick,
  formSteps,
  closeBookingDrawer,
  closeDrawer
}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [comment, setComment] = useState('');
  const [isPaymentMethodSelected, setIsPaymentMethodSelected] = useState(false);

  const { currentStep, next, prev, reset } = formSteps

  const infoHeader = (
    <BookingInfoHeader rooms={rooms} dates={dates} selectedHotel={selectedHotel}/>    
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
    try {
      console.log(selectedHotel)
      const bookingData = {
        user: session?.user.id, //logged in user
        hotel: selectedHotel._id,
        dates,
        rooms: [ { room: selectedRoom._id, ...rooms[0] } ],
        personalInfo: {
          name: fullName,
          email,
          phoneNumber,
          comment,
          paymentMethod: "Credit Card"
        }
      }

      const response = await fetch('http://localhost:4000/bookings', {
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
      // You can update your component state or take other actions upon successful booking creation
    } catch (error) {
      console.error('Error creating booking:', error.message);
      // Handle errors, show a message to the user, etc.
    }
  }

  return (
    <FormStepGroup currentStep={currentStep}>
      <FormStep onReturn={() => { closeDrawer(); reset() }}>
        <BookingStepLayout infoHeader={infoHeader} >
          <RoomBookingDrawerContent
            selectedHotel={selectedHotel}
            selectedRoom={selectedRoom}
            onRoomCardClick={onRoomCardClick}
          />
        </BookingStepLayout>
      </FormStep>
      <FormStep onReturn={prev}>
        <BookingStepLayout
          bottomButtonText='Continue'
          clickNext={next}
          selectedRoom={selectedRoom}
          infoHeader={infoHeader}
          disabled={!loggedIn}
        >
          <GuestInfoContent
            email={email}
            fullName={fullName}
            phoneNumber={phoneNumber}
            setEmail={setEmail}
            setFullName={setFullName}
            setPhoneNumber={setPhoneNumber}
          />
        </BookingStepLayout>
      </FormStep>
      <FormStep onReturn={prev}>
        <BookingStepLayout
          bottomButtonText='Book nu'
          clickNext={handleBook}
          selectedRoom={selectedRoom}
          disabled={!isPaymentMethodSelected}
          infoHeader={infoHeader}
        >
          <PaymentInfoContent
            selectedHotel={selectedHotel}
            dates={dates}
            comment={comment}
            setComment={setComment}
            fullName={fullName}
            isPaymentMethodSelected={isPaymentMethodSelected}
            setIsPaymentMethodSelected={setIsPaymentMethodSelected}
          />
        </BookingStepLayout>
      </FormStep>
      <FormStep onReturn={prev}>
        <BookingStepLayout
          bottomButtonText='Gå til forside'
          clickNext={closeBookingDrawer}
          selectedRoom={selectedRoom}
        >
          <ConfirmationSection
            selectedHotel={selectedHotel}
            selectedRoom={selectedRoom}
            rooms={rooms}
            dates={dates}
          />
        </BookingStepLayout>
      </FormStep>
    </FormStepGroup>
  );
}

export default BookingFormSection;
