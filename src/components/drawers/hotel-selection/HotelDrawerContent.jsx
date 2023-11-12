import React, { useState } from 'react'
import hotelData from "@/public/dummy-backend/hotels.json"
import HotelCard from './HotelCard'
import TabGroup from '../../ui/tabs/TabGroup'
import Tab from '../../ui/tabs/Tab'
import PrimaryButton from '../../ui/buttons/PrimaryButton'
import DrawerPrimaryButton from '../../ui/buttons/DrawerPrimaryButton'



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
        <h1 className="text-3xl font-semibold p-3">Hoteller</h1>

        <TabGroup className="flex-1">
            <Tab title="Alle" className="flex flex-col gap-3">
                <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                {renderHotels()}
            </Tab>
            <Tab title="Sjælland" className="flex flex-col gap-3">
                {renderHotels('Sjælland')}
            </Tab>
            <Tab title="Jylland" className="flex flex-col gap-3">
                {renderHotels('Jylland')}
            </Tab>            
            <Tab title="Fyn" className="flex flex-col gap-3">
                {renderHotels('Fyn')}
            </Tab>
        </TabGroup>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700 mt-auto"></hr>
        <DrawerPrimaryButton disabled={!selectedHotel} className="pt-12" onClick={onClose}>Choose</DrawerPrimaryButton>
    </div>
    )
}

export default HotelDrawerContent
