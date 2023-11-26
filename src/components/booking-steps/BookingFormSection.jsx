import React, { useState } from 'react';
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

  const bookingData = {
    user: '', //logged in user
    hotel: selectedHotel,
    dates,
    rooms,
    personalInfo: {
      name: fullName,
      email,
      phoneNumber,
      comment,
      paymentMethod: "Credit Card"
    }
  }

  const createBooking = async () => {
    try {
      const response = await fetch('http://your-backend-api/bookings', {
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
          clickNext={next}
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
}}

export default BookingFormSection;
