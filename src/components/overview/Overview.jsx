import React from 'react'
import Title from '../ui/text/Title'
import OverviewRoom from './OverviewRoom'

function Overview({ selectedRoom, clickEdit }) {
    return (
      <>
        <div className='h-full flex flex-col'>
          <div className='my-10'>
            <Title>Oversigt</Title>
          </div>

            <OverviewRoom selectedRoom={selectedRoom} clickEdit={clickEdit} />

          <div className="flex items-end mt-auto border-t-cw-gray-300 border-t-[1px] py-6  w-full">
            <div className='w-full flex flex-row justify-between'>
              <div>
                <Title>Total</Title>
              </div>
              <div>
                <Title>DKK {selectedRoom ? selectedRoom.price : '0.00'}</Title>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Overview;