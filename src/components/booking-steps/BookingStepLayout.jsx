import React from 'react'
import BookingInfoHeader from '../drawers/room-selection/BookingInfoHeader'
import PrimaryButton from '../ui/buttons/PrimaryButton'
import Title from '../ui/text/Title'
import OverviewBookingComponent from '../overview/OverviewBookingComponent'


function BookingStepLayout({ children, bottomButtonText, selectedRoom, selectedHotel, roomCount, guestCount, startDateString, endDateString, clickNext, disabled, isHeaderHidden }) {
  return (
    <>
        <div className="flex flex-col h-full min-h-screen pl-[55px] pt-10 w-full">
            <div className='flex h-full flex-row flex-1'>
                <div className='h-full w-3/5'>
                    <BookingInfoHeader startDateString={startDateString} endDateString={endDateString} roomCount={roomCount} guestCount={guestCount} selectedHotel={selectedHotel} isHeaderHidden={isHeaderHidden}/>    
                    <div className='flex flex-col gap-2 pr-5 pb-10 mb-10'>
                        {children}
                    </div>  
                </div>
                <div className='h-full w-2/5 pl-2 border-l-[1px]'>
                    <OverviewBookingComponent selectedRoom={selectedRoom}/>
                </div>
            </div>          
            <div className="fixed bottom-0 left-0 w-full !sticky z-[1]">
                <div className="relative border-t border-gray-200 bg-white">
                    <div className="flex items-center">
                        <div className="relative py-2 px-5 md:ml-auto opacity-100 max-md:w-full">
                            <PrimaryButton disabled={disabled} onClick={clickNext}>{bottomButtonText}</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BookingStepLayout