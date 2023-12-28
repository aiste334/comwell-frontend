import React from 'react'
import CalendarSvg from "@/public/icons/calendar.svg"
import BustSvg from "@/public/icons/bust.svg"
import LocationPointerSvg from "@/public/icons/locationpointer.svg"
import useBookingInfoFormatting from '@/src/hooks/useBookingInfoFormatting'
import RoomDrawerHeaderInfo from '../room-selection/RoomDrawerHeaderInfo'
import Title from '../../ui/Title'

function ConferenceInfoHeader({ dates,conferenceParticipantCount, className }) {

  const { startDateString, endDateString } = useBookingInfoFormatting({  dates })

  return (
    <>
      <div className={`fixed top-0 items-center h-[68px] flex text-xs ${className}`}>
        <RoomDrawerHeaderInfo 
            text={`${startDateString || '?'} - ${endDateString || '?'}`}
            Icon={CalendarSvg}
          />
          <RoomDrawerHeaderInfo
            text={`${conferenceParticipantCount} people`}
            Icon={BustSvg}
          />

        </div>
    </>
  )
}

export default ConferenceInfoHeader