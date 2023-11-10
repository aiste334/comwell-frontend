import React, { useState } from 'react'
import Heading from '../../ui/Heading'
import Title from '../../ui/Title'
import SuiteCard from './SuiteCard'
import hotelData from "@/public/dummy-backend/hotels.json"


function SuiteDrawerContent() {
  const [selectedSuite, setSelectedSuite] = useState(null);

  function handleSuiteCardClick(suite) {
    setSelectedSuite(suite); // Set the selected suite
  }

  const getRoomsForHotel = (hotelName) => {
    const hotel = hotelData.find(hotel => hotel.name === hotelName);

    if (hotel) {
        return hotel.rooms;
    } else {
        console.error(`Hotel with name "${hotelName}" not found.`);
        return [];
    }
};


  const renderSuites = (hotelName) => {
    const suites = getRoomsForHotel(hotelName);
    return suites.map(room => (
        <SuiteCard
            key={room.type}
            type={room.type}
            size={room.size}
            price={room.price}
            description={room.description}
            isSelected={selectedSuite === room.type} // Replace with your selectedRoom state
            onButtonClick={() => handleSuiteCardClick(room.type)}
        />
    ));
  };

  return (
    <>
      <div className="flex flex-col gap-6 px-[55px] pt-10 h-full">
        <Heading>Vælg værelse</Heading>
        <div className='flex flex-col gap-6'>
          {/* Assuming placeholder is the selected hotel */}
          {renderSuites('Borupgaarden')}
        </div>
      </div>
    </>
  );
}

export default SuiteDrawerContent;