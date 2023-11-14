import React from 'react'
import OfferCard from './OfferCard'
import Heading from '../ui/text/Heading'
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSlider } from 'keen-slider/react'
import offerData from 'public/dummy-backend/offers.json'
import RightArrowSvg from '@/public/icons/rightarrow.svg'
import 'keen-slider/keen-slider.min.css'; 

function OfferSection() {

    const [sliderRef, instanceRef] = useKeenSlider(
        {
          slideChanged() {
            console.log('slide changed')
          },
          slides: {
            perView: 3.5,
            spacing: 30,
          },
        },
        []
      )

  return (
    <>
        <div className='h-[800px] w-full flex flex-col'>
            <div className='h-[70px] w-screen items-center'>
                <Heading className={'absolute left-[80px]'}>Tilbud & oplevelsespakker</Heading>
                <button className='absolute right-[85px] flex items-center font-semibold border border-slate-200 rounded-full px-3 py-1.5 hover:bg-slate-800 hover:text-white'>
                    <span>Se vores tilbud og oplevelser</span>
                    <span><RightArrowSvg className='w-5 h-5'/></span>
                    </button>
            </div>
            <div ref={sliderRef} className="keen-slider w-[1500px] h-[550px]">
                {offerData.map((offer, index) => (
                    <OfferCard
                    key={index}
                    tag={offer.tag}
                    title={offer.title}
                    description={offer.description}
                    price={offer.price}
                    oldprice={offer.oldPrice}
                    rooms={offer.rooms}
                    image={offer.image}
                    people={offer.people}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

export default OfferSection