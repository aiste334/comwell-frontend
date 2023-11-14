import React from 'react'
import SmallFloaterBlack from '../ui/SmallFloaterBlack'
import Image from 'next/image'
import Title from '../ui/Title'
import STitle from '../ui/STitle'

function OfferCard({image, tag, title, description, price, oldprice}) {
  return (

    <div className="group h-[550px] flex flex-col border border-slate-200 rounded-lg overflow-hidden keen-slider__slide">
        <button className=''>
   
            <div className="pointer-events-none relative aspect-[1.6/1] overflow-hidden">
                <div className="absolute top-4 left-4 z-10 md:top-6 md:left-6">
                </div>
                <div className="module-richMedia relative block h-full w-full overflow-hidden bg-gray-600">
                    <Image src={image} width={600} height={400} alt='picture' className="w-full h-full object-cover transition-transform group-hover:scale-[1.05] ease-in duration-150"></Image>
                </div>
            </div>
            <div className='p-5 flex flex-col space-y-5 text-left'>
                <div className='uppercase'>
                    <SmallFloaterBlack>{tag}</SmallFloaterBlack>
                </div>
                <div>
                    <STitle>{title}</STitle>
                </div>
                <div className="max-lg:hidden  text-slate-800 lg:max-w-[90%] text-xs">
                    {description}
                </div>
                <div>
                    <Title>
                        <spa>Fra </spa>
                        <span className='text-slate-400 line-through'>{oldprice}</span>
                        <span> {price} kr.</span>
                    </Title>
                </div>
                <div>
                    <p className='text-slate-600 text-sm'>Ved 1 værelse / 1 person, pr. nat</p>
                </div>
            </div>
        </button>
    </div>
    )
}

export default OfferCard