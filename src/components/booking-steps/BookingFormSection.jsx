import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react'; 
import FormStepGroup from '../ui/form-steps/FormStepGroup';
import FormStep from '../ui/form-steps/FormStep';
import BookingStepLayout from './BookingStepLayout';
import RoomBookingDrawerContent from '../drawers/room-selection/RoomBookingDrawerContent';
import BackArrowButton from '../ui/buttons/circle-buttons/BackArrowButton';
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
}

export default BookingFormSection;
