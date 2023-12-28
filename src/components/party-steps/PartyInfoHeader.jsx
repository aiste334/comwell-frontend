import React from 'react'
import CalendarSvg from "@/public/icons/calendar.svg"
import BustSvg from "@/public/icons/bust.svg"
import useBookingInfoFormatting from '@/src/hooks/useBookingInfoFormatting'
import RoomDrawerHeaderInfo from '../drawers/room-selection/RoomDrawerHeaderInfo'
import LocationPointerSvg from "@/public/icons/locationpointer.svg"
import Sun from "@/public/icons/sun.svg"

function PartyInfoHeader({ dates,partyParticipantCount, className, selectedHotel, arrangement }) {

  const { startDateString, endDateString } = useBookingInfoFormatting({  dates })

  return (
    <>
      <div className={`fixed top-0 items-center h-[68px] flex text-xs ${className}`}>
        <RoomDrawerHeaderInfo 
            text={`${startDateString || '?'} - ${endDateString || '?'}`}
            Icon={CalendarSvg}
          />
          <RoomDrawerHeaderInfo
            text={`${partyParticipantCount} people`}
            Icon={BustSvg}
          />
          <RoomDrawerHeaderInfo
            text={selectedHotel?.name || '?'}
            Icon={LocationPointerSvg}
          /> 
          <RoomDrawerHeaderInfo
          text={arrangement?.name || '?'}
          Icon={Sun}
        /> 
        </div>
    </>
  )
}

export default PartyInfoHeader;