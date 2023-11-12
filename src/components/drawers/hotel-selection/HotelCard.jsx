import React from 'react'

import BackArrowButton from '../../ui/buttons/circle-buttons/BackArrowButton'

import Image from "next/image"
import CheckMarkSvg from "@/public/icons/action-circles/checkmark.svg"

function HotelCard({ name, city, image, onButtonClick, isSelected }) {

    const cardClassName = `input relative grid w-full grid-cols-3 border hover:border-slate-400 rounded ${
        isSelected ? 'border-slate-800' : 'border-slate-200'
      } overflow-hidden items-center`;

    const svgClassName = isSelected ? 'visible': 'invisible'

    return (
      <>
          <li className='px-3 list-none'>
              <button onClick={onButtonClick} type="button" className={cardClassName}>
                  <div className="col-span-1 h-full min-h-[66px] w-full aspect-[16/9]">
                      <div className="module-richMedia relative block h-full w-full overflow-hidden bg-gray-200">
                        <Image src={image} width={120} height={120} alt='picture'></Image>
                     </div>
                  </div>
                  <div className="col-span-1 flex w-full flex-col pl-2 text-left ">
                      <span className='text-sm font-semibold'>{name}</span>
                      <span className='text-xs text-slate-600'>{city}</span>
                  </div>
                  <div className={`absolute right-[12px] top-1/2 flex h-[24px] w-[24px] -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-black text-white !border-0 ${svgClassName}`}>
                        <CheckMarkSvg/>
                  </div>
              </button>
          </li>
      </>
    )
  }
  
  export default HotelCard