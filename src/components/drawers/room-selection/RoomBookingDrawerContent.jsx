import React, { useState } from 'react'
import Heading from '../../ui/text/Heading'
import RoomCard from './RoomCard'
import CalendarSvg from "@/public/icons/calendar.svg"
import BustSvg from "@/public/icons/bust.svg"
import RoomDrawerHeaderInfo from './RoomDrawerHeaderInfo'
import LocationPointerSvg from "@/public/icons/locationpointer.svg"
import BedSvg from "@/public/icons/bed.svg"
import STitle from '../../ui/text/STitle'
import ShortSideDrawer from '../../side-drawer/ShortSideDrawer'
import DateSelection from '../date-selection/DateSelection'
import Overview from '../../overview/Overview'


function RoomBookigDrawerContent({ selectedHotel, roomCount, guestCount, startDateString, endDateString }) {

  const [ isOverViewDisplayed, setIsOverViewDisplayed] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState(null);

  function closeOverviewDrawer(){
    setIsOverViewDisplayed(false)
  }

  function onRoomCardClick(room) {
    setSelectedRoom(room);
  }

  const renderRooms = () => {
    return selectedHotel?.rooms.map(room => (
        <RoomCard
            key={room.type}
            type={room.type}
            size={room.size}
            price={room.price}
            image={room.image}
            description={room.description}
            isSelected={selectedRoom === room}
            onRoomCardClick={() => onRoomCardClick(room)}
        />
    ));
  };

  function displayOverview(){
    setIsOverViewDisplayed(true)
  }

  return (
    <>
      <div className="flex flex-col gap-6 pl-[55px] pt-10 w-full h-full">
        <div className='fixed top-0 left-[70px] items-center w-11/12 h-[68px] flex text-xs'>
          <RoomDrawerHeaderInfo 
            text={`${startDateString} - ${endDateString}`}
            Icon={CalendarSvg}
          />
          <RoomDrawerHeaderInfo
            text={`${roomCount} rooms, ${guestCount} people`}
            Icon={BustSvg}
          />
          <RoomDrawerHeaderInfo
            text={selectedHotel.name}
            Icon={LocationPointerSvg}
          /> 
          <button className="ml-auto mr-[35px] flex items-center gap-x-2 transition-opacity" onClick={displayOverview}>
            <div className="flex flex-col justify-end gap-y-0.5">
              <span className="room-label ml-auto block w-max lowercase">1 Værelse</span>
              <div className="whitespace-nowrap price">
                <STitle textColor='black'>
                  {`${selectedRoom ? selectedRoom.price + " kr." : " "}`}
                </STitle>
              </div>
            </div>
            <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white md:bg-theme-10">
              <BedSvg />
            </div>
          </button>
        </div>
        <Heading>Vælg værelse</Heading>
        <div className='flex flex-col gap-6'>
          {renderRooms()}
        </div>
      </div>
      
      <ShortSideDrawer isOpen={isOverViewDisplayed} onClose={closeOverviewDrawer}>
        <Overview selectedRoom={selectedRoom} clickEdit={closeOverviewDrawer}/>
      </ShortSideDrawer>
    </>
  );
}

export default RoomBookigDrawerContent;