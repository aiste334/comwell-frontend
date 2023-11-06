import React, { useState } from 'react'
import backarrow from "@/public/icons/backarrow.svg"
import Image from "next/image"


function HotelDrawerContent({ closeDrawer }) {

    const [ selectedFilter, setSelectedFilter ] = useState('alle')


    function onClickAlle(){
        setSelectedFilter('alle');
    }
    function onClickSjælland(){
        setSelectedFilter('sjælland');
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

  return (
    <>
        <button onClick={closeHotelDrawer} className='p-2'><Image src={backarrow}/></button>
        <h1 className="text-3xl font-semibold p-3">Hoteller</h1>
        <nav className="text-xs font-semibold flex p-0.5">
            <button name="alle" className={getFilterClassName("alle")} onClick={onClickAlle}>Alle</button>
            <button name="sjælland" className={getFilterClassName("sjælland")} onClick={onClickSjælland}>Sjælland</button>
            <button name="jylland" className={getFilterClassName("jylland")} onClick={onClickJylland}>Jylland</button>
            <button name="fyn" className={getFilterClassName("fyn")} onClick={onClickFyn}>Fyn</button>
        </nav>
    </>
    )
}

export default HotelDrawerContent