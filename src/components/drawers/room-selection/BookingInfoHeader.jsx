import React from 'react'

function BookingInfoHeader({ dateString, }) {
  return (
    <>
        <RoomDrawerHeaderInfo 
            text={dateString}
            Icon={calendarIcon}
          />
          <RoomDrawerHeaderInfo
            text={roomPeopleString}
            Icon={personIcon}
          />
          <RoomDrawerHeaderInfo
            text={selectedHotel.name}
            Icon={LocationPointerSvg}
          />
    </>
  )
}

export default BookingInfoHeader