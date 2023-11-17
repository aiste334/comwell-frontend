import React from 'react'
import CircleButton from '../ui/buttons/circle-buttons/CircleButton'
import BuildingSvg from '@/public/icons/building.svg'
import XSTitle from '../ui/text/XSTitle'
import RoomDescription from '../ui/RoomDescription'

function MiniOverviewCard({ Icon, title, subtitle }) {
  return (
    <>
        <div className="border rounded-[10px] px-3 py-4 flex gap-x-5">
            <div className=' rounded-full w-8 h-8 bg-cw-gray-200 flex items-center '>
              <Icon className="mx-auto w-4 h-4"/>
            </div>
            <div className='flex flex-col'> 
                <XSTitle>{title}</XSTitle>
                <span className='flex text-xs'>{subtitle}</span>
            </div>
           
        </div>
    </>
  )
}

export default MiniOverviewCard