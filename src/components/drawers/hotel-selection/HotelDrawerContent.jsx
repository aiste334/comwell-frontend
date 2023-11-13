import React, { useState } from 'react'
import hotelData from "@/public/dummy-backend/hotels.json"
import HotelCard from './HotelCard'
import TabGroup from '../../ui/tabs/TabGroup'
import Tab from '../../ui/tabs/Tab'
import PrimaryButton from '../../ui/buttons/PrimaryButton'
import DrawerPrimaryButton from '../../ui/buttons/DrawerPrimaryButton'
import Heading from '../../ui/text/Heading'



function HotelDrawerContent({ selectedHotel, setSelectedHotel, onClose }) {

    function handleCardClick(hotel) {
        setSelectedHotel(hotel); // Set the selected hotel
    }

    const renderHotels = (area) => {
        const filteredHotels = area ? hotelData.filter(hotel => hotel.area === area) : hotelData
        return filteredHotels.map(hotel => { return (
            <HotelCard
              key={hotel.name}
              name={hotel.name}
              city={hotel.city}
              image={hotel.image}
              isSelected={selectedHotel === hotel} // Pass isSelected prop
              onButtonClick={() => handleCardClick(hotel)}
            />
          )})
    }

  return (
    <div className='flex flex-col h-full'>
        <Heading>Hotels</Heading>
        <TabGroup className="flex-1 flex flex-col" showDivider>
            <Tab title="Alle" className="flex flex-col gap-3 flex-1 overflow-y-scroll">
                {renderHotels()}
            </Tab>
            <Tab title="Sjælland" className="flex flex-col gap-3 flex-1 overflow-y-scroll">
                {renderHotels('Sjælland')}
            </Tab>
            <Tab title="Jylland" className="flex flex-col gap-3 flex-1 overflow-y-scroll">
                {renderHotels('Jylland')}
            </Tab>            
            <Tab title="Fyn" className="flex flex-col gap-3 flex-1 overflow-y-scroll">
                {renderHotels('Fyn')}
            </Tab>
        </TabGroup>
        <DrawerPrimaryButton disabled={!selectedHotel} className="pt-12" onClick={onClose}>Choose</DrawerPrimaryButton>
    </div>
    )
}

export default HotelDrawerContent
