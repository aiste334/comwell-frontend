import React from 'react'
import OfferCard from './OfferCard'
import Heading from '../ui/text/Heading'
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react'
import offerData from 'public/dummy-backend/offers.json'
import RightArrowSvg from '@/public/icons/rightarrow.svg'
import 'keen-slider/keen-slider.min.css'; 
import SidePadding from '../ui/side-padding/SidePadding'
import BackArrowButton from '../ui/buttons/circle-buttons/BackArrowButton'

function OfferSection() {

  const [sliderRef, slider] = useKeenSlider(
    {
      slides: {
        perView: 3,
        spacing: 30,
        centered: true
      }
    },
    []
  )

  return (
    <div className='max-w-full overflow-hidden'>
      <SidePadding className='flex items-center justify-between pb-10'>
        <Heading>Tilbud & oplevelsespakker</Heading>
        <button className='flex items-center font-semibold border border-slate-200 rounded-full px-3 py-1.5 hover:bg-slate-800 hover:text-white'>
          <span>Se vores tilbud og oplevelser</span>
          <span><RightArrowSvg className='w-5 h-5'/></span>
        </button>
      </SidePadding>

      <div className="relative">
        <div ref={sliderRef} className="keen-slider max-w-full px-20 !w-full">
          {offerData.map((offer, index) => (
            <OfferCard
              key={index}
              offer={offer}
            />
          ))}
          <OfferCard
            offer={{}}
            className="invisible"
          />
          <OfferCard
            offer={{}}
            className="invisible"
          />
        </div>
        <BackArrowButton onClick={() => { slider.current?.prev() }} className="absolute left-10 top-0 bottom-0 my-auto z-30"/>
        <BackArrowButton onClick={() => { slider.current?.next() }} className="absolute right-10 top-0 bottom-0 my-auto z-30 rotate-180"/>
      </div>

    </div>
  )
}

export default OfferSection 