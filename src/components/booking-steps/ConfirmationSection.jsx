import React from 'react'
import Title from '../ui/text/Title'
import CheckMarkSvg from '@/public/icons/action-circles/checkmark.svg'
import CalendarSvg from "@/public/icons/calendar.svg"
import BustSvg from "@/public/icons/bust.svg"
import LocationPointerSvg from "@/public/icons/locationpointer.svg"
import useBookingInfoFormatting from '@/src/hooks/useBookingInfoFormatting'


function ConfirmationSection({rooms, dates, selectedHotel}) {

  const { startDateString, endDateString, roomCount, guestCount } = useBookingInfoFormatting({ rooms, dates })

  return (
    <div>
        <div className='flex flex-col gap-3'>
            <div className='flex flex-row items-center gap-2'>
                <div className={`flex h-[24px] w-[24px] rounded-full bg-black text-white !border-0`}>
                    <CheckMarkSvg/>
                </div>
                <Title>Booking gennemført</Title>
            </div>
            <div className='text-slate-600'>
                <p>Dit booking reference er REFERENCE</p> 
                {/* TODO add reference number */}
            </div>
            <div className='flex flex-col'>
                <span className='px-4 gap-2 flex items-center'>
                    <CalendarSvg className='h-[15px] w-[15px]'/> 
                    {`${startDateString || '?'} - ${endDateString || '?'}`}
                </span>
                <span className='px-4 gap-2 flex items-center'>
                    <BustSvg className='h-[15px] w-[15px]'/>
                    {`${roomCount} rooms, ${guestCount} people`}
                </span>              
                <span className='px-4 gap-2 flex items-center'>
                    <LocationPointerSvg className='h-[15px] w-[15px]'/>
                    {selectedHotel?.name}
                </span>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationSection