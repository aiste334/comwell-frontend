import React, { useState } from 'react'
import Heading from '../../ui/text/Heading'
import RoomCard from './RoomCard'

function RoomBookingDrawerContent({ selectedHotel, selectedRoom, onRoomCardClick }) {

  const renderRooms = () => {
    return selectedHotel?.rooms?.map((room, index) => (
      <RoomCard
        key={index}
        room={room}
        description={room.description}
        isSelected={selectedRoom === room}
        onRoomCardClick={() => onRoomCardClick(room)}
      />
    ));
  };

  return (
    <>
      <Heading>Vælg værelse</Heading>
      <div className='flex flex-col gap-6 pt-8 pb-5'>
          {renderRooms()}
      </div>
    </>
  );
}

export default RoomBookingDrawerContent;