import React from 'react'
import SmallFloaterBlack from '../ui/SmallFloaterBlack'
import Image from 'next/image'
import STitle from '../ui/text/STitle'
import Title from '../ui/text/Title'

function OfferCard({ offer, className }) {
  if(!offer) return

  const { image, tag, title, description, price, oldPrice } = offer

  return (
    <div className={`group h-[550px] cursor-pointer flex flex-col border border-slate-200 rounded-lg overflow-hidden keen-slider__slide ${className}`}>
        <div className="pointer-events-none relative aspect-[1.6/1] overflow-hidden">
            <div className="absolute top-4 left-4 z-10 md:top-6 md:left-6">
            </div>
            <div className="module-richMedia relative block h-full w-full overflow-hidden bg-gray-600">
                {image &&
                    <Image src={image || ''} width={600} height={400} alt='picture' className="w-full h-full object-cover transition-transform group-hover:scale-[1.05] ease-in duration-150"/>
                }
            </div>
        </div>
        <div className='p-5 flex flex-col space-y-5 text-left'>
            <div className='uppercase'>
                <SmallFloaterBlack>{tag || ''}</SmallFloaterBlack>
            </div>
            <div>
                <STitle>{title || ''}</STitle>
            </div>
            <div className="max-lg:hidden  text-slate-800 lg:max-w-[90%] text-xs">
                {description}
            </div>
            <div>
                <Title>
                    <span>Fra </span>
                    { oldPrice &&
                        <span className='text-slate-400 line-through'>{oldPrice}</span>
                    }
                    <span> {price || '0'} kr.</span>
                </Title>
            </div>
            <div>
                <p className='text-slate-600 text-sm'>Ved 1 værelse / 1 person, pr. nat</p>
            </div>
        </div>
    </div>
    )
}

export default OfferCard