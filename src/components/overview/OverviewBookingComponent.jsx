import React from 'react'
import Title from '../ui/text/Title'
import OverviewRoom from './OverviewRoom'

function OverviewBookingComponent({ selectedRoom }) {
  return (
    <>
        <div className='h-full flex flex-col'>
            <div className='my-10'>
                <Title>Oversigt</Title>
            </div>
            <OverviewRoom selectedRoom={selectedRoom} />
            <div className="flex flex-col flex-grow justify-end border-t-cw-gray-300 border-y-[1px] py-6  w-full">
                <div className='w-full flex flex-row justify-between'>
                    <Title>Total</Title>
                    <Title>DKK {selectedRoom ? selectedRoom.price : '0.00'}</Title>
                </div>
            </div>
        </div>
    </>
  )
}

export default OverviewBookingComponent