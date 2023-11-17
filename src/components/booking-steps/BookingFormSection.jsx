import React, { useState } from 'react';
import FormStepGroup from '../ui/form-steps/FormStepGroup';
import FormStep from '../ui/form-steps/FormStep';
import BookingStepLayout from './BookingStepLayout';
import RoomBookingDrawerContent from '../drawers/room-selection/RoomBookingDrawerContent';
import BackArrowButton from '../ui/buttons/circle-buttons/BackArrowButton';
import ConfirmationSection from './ConfirmationSection';
import GuestInfoContent from './GuestInfoContent';
import PaymentInfoContent from './PaymentInfoContent';

function BookingFormSection({
  selectedRoom,
  selectedHotel,
  roomCount,
  guestCount,
  startDateString,
  endDateString,
  onRoomCardClick,
  currentStep,
  next,
  prev,
  closeBookingDrawer,
  closeDrawer
}) {
  const [fuldenavn, setFuldeNavn] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [kommentar, setKommentar] = useState('');
  const [isPaymentMethodSelected, setIsPaymentMethodSelected] = useState(false);

  const commonBackButtonProps = { className: 'absolute top-4 left-5', onClick: prev };

  return (
    <FormStepGroup currentStep={currentStep}>
      <FormStep>
        <RoomBookingDrawerContent
          closeDrawer={closeDrawer}
          selectedHotel={selectedHotel}
          selectedRoom={selectedRoom}
          roomCount={roomCount}
          guestCount={guestCount}
          startDateString={startDateString}
          endDateString={endDateString}
          onRoomCardClick={onRoomCardClick}
        />
      </FormStep>
      <FormStep>
        <BackArrowButton {...commonBackButtonProps} />
        <BookingStepLayout
          bottomButtonText='Continue'
          clickNext={next}
          selectedHotel={selectedHotel}
          selectedRoom={selectedRoom}
          roomCount={roomCount}
          guestCount={guestCount}
          startDateString={startDateString}
          endDateString={endDateString}
          isHeaderHidden={false}
        >
          <GuestInfoContent
            email={email}
            fuldenavn={fuldenavn}
            phoneNumber={phoneNumber}
            setEmail={setEmail}
            setFuldeNavn={setFuldeNavn}
            setPhoneNumber={setPhoneNumber}
          />
        </BookingStepLayout>
      </FormStep>
      <FormStep>
        <BackArrowButton {...commonBackButtonProps} />
        <BookingStepLayout
          bottomButtonText='Book nu'
          clickNext={next}
          selectedHotel={selectedHotel}
          selectedRoom={selectedRoom}
          roomCount={roomCount}
          guestCount={guestCount}
          startDateString={startDateString}
          endDateString={endDateString}
          disabled={!isPaymentMethodSelected}
          isHeaderHidden={false}
        >
          <PaymentInfoContent
            selectedHotel={selectedHotel}
            startDateString={startDateString}
            endDateString={endDateString}
            kommentar={kommentar}
            setKommentar={setKommentar}
            fuldenavn={fuldenavn}
            isPaymentMethodSelected={isPaymentMethodSelected}
            setIsPaymentMethodSelected={setIsPaymentMethodSelected}
          />
        </BookingStepLayout>
      </FormStep>
      <FormStep>
        <BookingStepLayout
          bottomButtonText='Gå til forside'
          clickNext={closeBookingDrawer}
          selectedHotel={selectedHotel}
          selectedRoom={selectedRoom}
          roomCount={roomCount}
          guestCount={guestCount}
          startDateString={startDateString}
          endDateString={endDateString}
          isHeaderHidden={true}
        >
          <ConfirmationSection
            selectedHotel={selectedHotel}
            selectedRoom={selectedRoom}
            roomCount={roomCount}
            guestCount={guestCount}
            startDateString={startDateString}
            endDateString={endDateString}
          />
        </BookingStepLayout>
      </FormStep>
    </FormStepGroup>
  );
}

export default BookingFormSection;
