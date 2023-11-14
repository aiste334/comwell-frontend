import React from 'react'
import Image from 'next/image'
import XSTitle from '../ui/text/XSTitle'

function OverviewRoom({ selectedRoom, clickEdit }) {
    return (
      <div className='border-b-[1px] pb-3'>
        <div className="w-full flex justify-between items-center py-2">
          {selectedRoom ? (
            <>
              <span className="opacity-[0.75] uppercase text-xs">
                Room
              </span>
              <button type="button" className="underline text-sm font-[500]" onClick={clickEdit}>
                edit
              </button>
            </>
          ) : (
            <span className="opacity-[0.75] uppercase text-xs">
              You have not yet added anything to your booking.
            </span>
          )}
        </div>
        {selectedRoom && (
          <div className="grid grid-cols-[56px,auto] w-full h-[85px] gap-x-2">
            <div className="relative block w-full overflow-hidden bg-gray-200 h-[43px] rounded-[5px]">
              {/* Assuming selectedRoom.image is the URL to the image */}
              <Image src={selectedRoom.image} layout="fill" objectFit="cover" alt='picture' />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col pr-4 max-w-[60%]">
                <XSTitle>{selectedRoom.type}</XSTitle>
                <div className='h-1/3 w-full rounded-lg bg-slate-100'></div>
              </div>
              <div className="overflow-visible">
                <XSTitle>DKK {selectedRoom.price}</XSTitle>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default OverviewRoom;