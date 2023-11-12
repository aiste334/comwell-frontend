import React, { useState } from 'react'
import Heading from '../../ui/text/Heading'
import Title from '../../ui/Title'
import SuiteCard from './SuiteCard'
import hotelData from "@/public/dummy-backend/hotels.json"
import { formatToMonthDay } from '@/src/utils/dates'
import CalendarSvg from "@/public/icons/calendar.svg"
import BustSvg from "@/public/icons/bust.svg"
import SuiteDrawerHeaderInfo from './SuiteDrawerHeaderInfo'
import LocationPointerSvg from "@/public/icons/locationpointer.svg"
import BedSvg from "@/public/icons/bed.svg"


function SuiteDrawerContent({ selectedHotel, roomCount, guestCount, startDateString, endDateString }) {
  const [selectedSuite, setSelectedSuite] = useState(null);


  function handleSuiteCardClick(suite) {
    setSelectedSuite(suite); // Set the selected suite
  }

  const renderSuites = () => {
    return selectedHotel?.rooms.map(room => (
        <SuiteCard
            key={room.type}
            type={room.type}
            size={room.size}
            price={room.price}
            image={room.image}
            description={room.description}
            isSelected={selectedSuite === room}
            onButtonClick={() => handleSuiteCardClick(room)}
        />
    ));
  };

  return (
    <>
      <div className="flex flex-col gap-6 pl-[55px] pt-10 w-full h-full">
        <div className='fixed top-0 left-[70px] items-center w-11/12 h-[68px] flex text-xs'>
          <SuiteDrawerHeaderInfo 
            text={`${startDateString} - ${endDateString}`}
            Icon={CalendarSvg}
          />
          <SuiteDrawerHeaderInfo
            text={`${roomCount} rooms, ${guestCount} people`}
            Icon={BustSvg}
          />
          <SuiteDrawerHeaderInfo
            text={selectedHotel.name}
            Icon={LocationPointerSvg}
          />
          <button className="ml-auto mr-[35px] flex items-center gap-x-2 transition-opacity" aria-label="Åben kurv">
            <div className="flex flex-col justify-end gap-y-0.5">
              <span className="room-label ml-auto block w-max lowercase">1 Værelse</span>
              <div className="whitespace-nowrap price">
                <span>{`${selectedSuite ? selectedSuite.price + " kr." : " "}`}</span>
              </div>
            </div>
            <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white md:bg-theme-10">
              <BedSvg />
            </div>
          </button>
        </div>
        <Heading>Vælg værelse</Heading>
        <div className='flex flex-col gap-6'>
          {renderSuites()}
        </div>
      </div>
    </>
  );
}

export default SuiteDrawerContent;