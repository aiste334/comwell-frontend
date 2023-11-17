import React from 'react'
import CalendarSvg from "@/public/icons/calendar.svg"
import BustSvg from "@/public/icons/bust.svg"
import LocationPointerSvg from "@/public/icons/locationpointer.svg"
import RoomDrawerHeaderInfo from './RoomDrawerHeaderInfo'

function BookingInfoHeader({ startDateString, endDateString, roomCount, guestCount, selectedHotel, isHeaderHidden }) {

  const isHeaderHiddenClassName = isHeaderHidden ? 'invisible': 'visible'

  return (
    <>
      <div className={`fixed top-0 items-center h-[68px] flex text-xs ${isHeaderHiddenClassName}`}>
        <RoomDrawerHeaderInfo 
            text={`${startDateString} - ${endDateString}`}
            Icon={CalendarSvg}
          />
          <RoomDrawerHeaderInfo
            text={`${roomCount} rooms, ${guestCount} people`}
            Icon={BustSvg}
          />
          <RoomDrawerHeaderInfo
            text={selectedHotel?.name}
            Icon={LocationPointerSvg}
          /> 
        </div>
    </>
  )
}

export default BookingInfoHeader