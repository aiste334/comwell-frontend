import React from 'react'
import SmallFloater from '../ui/SmallFloater'
import Image from "next/image"
import STitle from '../ui/STitle'


function Suggestion({ image, floaterText, titleText, subtitle, width }) {
  return (
    <div className={`${width}`}>
      <button className='w-full h-full relative overflow-hidden rounded-lg group'>
        <div className="bg-gradient-to-t from-black/80 absolute inset-0 z-[1] flex flex-col px-3 py-3.5 md:p-8">
          <STitle textColor={'white'} className={'mt-auto mb-2 text-left'} >{titleText}</STitle>
        <div className="max-w-[80%] text-sm text-left text-white opacity-[0.85] max-lg:hidden">{subtitle}
        </div>
        </div>
        <div className="module-richMedia absolute inset-0 bg-gray-200">
          <Image
            src={image}
            alt='picture'
            className="w-full h-full object-cover transition-transform group-hover:scale-[1.05] ease-in duration-150"
            width={1320}
            height={1680}/>
        </div>
        <SmallFloater className={'uppercase'} text={floaterText} />
      </button>
    </div>
  )
}

export default Suggestion