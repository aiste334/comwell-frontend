import React, { useState } from 'react'
import backarrow from "@/public/icons/backarrow.svg"
import Image from "next/image"
import hotelData from "@/public/dummy-backend/hotels.json"
import HotelCard from './HotelCard'


function HotelDrawerContent({ closeDrawer }) {

    const [ selectedFilter, setSelectedFilter ] = useState('alle')
    const [ selectedHotel, setSelectedHotel ] = useState()

    function onClickAlle(){
        setSelectedFilter('alle');
    }
    function onClickSjælland(){
        setSelectedFilter('sjælland');
        getHotelData();
    }    
    function onClickJylland(){
        setSelectedFilter('jylland');
    }    
    function onClickFyn(){
        setSelectedFilter('fyn');
    }    

    function getFilterClassName(filterLocation){

        if(selectedFilter == filterLocation){
            return "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-10 focus:ring-gray-300 font-medium rounded-full text-xs px-2 py-1  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        }
        return "p-2"
    }

    function closeHotelDrawer() {
        closeDrawer(); // Close the drawer by calling the function from props
    }

    function getHotelData(){
        const hotels = hotelData;
        console.log(hotels);
    }

    function handleCardClick(hotelName) {
        console.log(`Card clicked: ${hotelName}`);
      }

  return (
    <>
        <button onClick={closeHotelDrawer} className='p-2'><Image src={backarrow}/></button>
        <h1 className="text-3xl font-semibold p-3">Hoteller</h1>
        <h1 className="text-3xl font-semibold p-3"></h1>

        <nav className="text-xs font-semibold flex p-0.5">
            <button name="alle" className={getFilterClassName("alle")} onClick={onClickAlle}>Alle</button>
            <button name="sjælland" className={getFilterClassName("sjælland")} onClick={onClickSjælland}>Sjælland</button>
            <button name="jylland" className={getFilterClassName("jylland")} onClick={onClickJylland}>Jylland</button>
            <button name="fyn" className={getFilterClassName("fyn")} onClick={onClickFyn}>Fyn</button>
        </nav>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

<ul className="flex flex-col gap-y-2">
{hotelData.map((hotel, index) => (
          <HotelCard
            key={index}
            name={hotel.name}
            city={hotel.city}
            onButtonClick={() => handleCardClick(hotel.name)}
          />
        ))}
</ul>
    </>
    )
}

export default HotelDrawerContent