import React from 'react'
import BookingInfoHeader from '../drawers/room-selection/BookingInfoHeader'
import PrimaryButton from '../ui/buttons/PrimaryButton'
import Title from '../ui/text/Title'
import OverviewBookingComponent from '../overview/OverviewBookingComponent'


function BookingStepLayout({ children, bottomButtonText, selectedRoom, clickNext, disabled, infoHeader }) {
  return (
    <>
        <div className="h-full flex flex-col pl-[55px] pt-10">
            <div className='flex flex-row flex-1 h-full'>
                <div className='flex-grow-[3] h-full'>
                    {infoHeader}
                    <div className='flex flex-col gap-2 pt-10 pb-24 mr-3 h-full overflow-y-auto'>
                        {children}
                    </div>  
                </div>
                { selectedRoom && 
                    <div className='h-full flex-grow-[2] pl-2 border-l-[1px]'>
                        <OverviewBookingComponent selectedRoom={selectedRoom}/>
                    </div>
                }
            </div>        
            { clickNext && bottomButtonText &&
                <div className="bottom-0 left-0 w-full sticky z-[1]">
                    <div className="relative border-t border-gray-200 bg-white">
                        <div className="flex items-center">
                            <div className="relative py-2 px-5 md:ml-auto opacity-100 max-md:w-full">
                                <PrimaryButton disabled={disabled} onClick={clickNext}>{bottomButtonText}</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    </>
  )
}

export default BookingStepLayout