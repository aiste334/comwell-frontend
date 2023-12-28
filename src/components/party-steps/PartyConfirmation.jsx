import React from 'react'
import Title from '../ui/text/Title'
import CheckMarkSvg from '@/public/icons/action-circles/checkmark.svg'
import CalendarSvg from "@/public/icons/calendar.svg"
import BustSvg from "@/public/icons/bust.svg"
import LocationPointerSvg from "@/public/icons/locationpointer.svg"
import useBookingInfoFormatting from '@/src/hooks/useBookingInfoFormatting'
import Sun from "@/public/icons/sun.svg"

function PartyConfirmation ({ dates, times, selectedHotel, partyParticipantCount,arrangement }) {
  const { startDateString, endDateString, startTimeString, endTimeString } = useBookingInfoFormatting({ dates, times, partyParticipantCount });

  return (
    <div>
        <div className='flex flex-col gap-3'>
            <div className='flex flex-row items-center gap-2'>
                <div className={`flex h-[24px] w-[24px] rounded-full bg-black text-white !border-0`}>
                    <CheckMarkSvg />
                </div>
                <Title>Party Inquiry Requested</Title>
            </div>
            <div className='flex flex-col'>
                <span className='px-4 gap-2 flex items-center'>,
                    <CalendarSvg className='h-[15px] w-[15px]'/> 
                    {`${startDateString || '?'} - ${endDateString || '?'}`}
                </span>
                <span className='px-4 gap-2 flex items-center'>
                    <CalendarSvg className='h-[15px] w-[15px]'/> 
                    {`${startTimeString || '?'} - ${endTimeString || '?'}`}
                </span>
                <span className='px-4 gap-2 flex items-center'>
                    <BustSvg className='h-[15px] w-[15px]'/>
                    {`${partyParticipantCount} people`}
                </span>              
                <span className='px-4 gap-2 flex items-center'>
                    <LocationPointerSvg className='h-[15px] w-[15px]'/>
                    {selectedHotel?.name || '?'}
                </span>
                <span className='px-4 gap-2 flex items-center'>
                    <Sun className='h-[15px] w-[15px]'/>
                    {arrangement?.name || '?'}
                </span>
            </div>
        </div>
    </div>
  )
}

export default PartyConfirmation
