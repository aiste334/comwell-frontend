import React from 'react'
import CalendarSvg from "@/public/icons/calendar.svg"
import BustSvg from "@/public/icons/bust.svg"
import LocationPointerSvg from "@/public/icons/locationpointer.svg"
import RoomDrawerHeaderInfo from './RoomDrawerHeaderInfo'
import useBookingInfoFormatting from '@/src/hooks/useBookingInfoFormatting'

function BookingInfoHeader({ dates, rooms, selectedHotel, className }) {

  const { startDateString, endDateString, roomCount, guestCount } = useBookingInfoFormatting({ rooms, dates })

  return (
    <>
      <div className={`fixed top-0 items-center h-[68px] flex text-xs ${className}`}>
        <RoomDrawerHeaderInfo 
            text={`${startDateString || '?'} - ${endDateString || '?'}`}
            Icon={CalendarSvg}
          />
          <RoomDrawerHeaderInfo
            text={`${roomCount} rooms, ${guestCount} people`}
            Icon={BustSvg}
          />
          <RoomDrawerHeaderInfo
            text={selectedHotel?.name || '?'}
            Icon={LocationPointerSvg}
          /> 
        </div>
    </>
  )
}

export default BookingInfoHeader