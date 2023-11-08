import Heading from '@/src/components/ui/Heading'
import TabGroup from '@/src/components/ui/tabs/TabGroup'
import Tab from '@/src/components/ui/tabs/Tab'
import Select from '@/src/components/ui/select/Select'
import DoubleSelect from '@/src/components/ui/select/DoubleSelect'
import PrimaryButton from '@/src/components/ui/buttons/PrimaryButton'
import SearchSvg from '@/public/icons/search.svg'
import SideDrawer from '../side-drawer/SideDrawer'
import { useState } from 'react'
import CloseButton from '../ui/buttons/circle-buttons/CloseButton'
import RoomSelectionList from '../drawers/room-selection/RoomSelectionList'

const SearchCard = ({ className }) => {

  const INITIAL_ROOM = {
    adults: 1,
    children: 0,
    toddlers: 0
  }

  const [drawer, setDrawer] = useState()
  const closeDrawer = () => setDrawer()

  const [rooms, setRooms] = useState([INITIAL_ROOM])
  const roomCount = rooms.length
  const guestCount = rooms.reduce((prev, curr) => prev += curr.adults + curr.children + curr.toddlers, 0)

  return (
    <>
    <div className={'bg-white rounded-2xl w-[530px] p-8 drop-shadow-lg ' + className}>
      <Heading>Book mødelokale på Copenhagen Portside</Heading>
      <TabGroup className="py-2">
        <Tab title="Overnatning" className="flex flex-col gap-3">
          <Select title="Hotel" onClick={() => {setDrawer('hotel')}}>Select hotel</Select>
          <Select title="Rooms" onClick={() => {setDrawer('rooms')}}>{roomCount} Room, {guestCount} Person</Select>
          <DoubleSelect titles={["Check-in", "Check-out"]} values={["Nov 6", "Nov 7"]} onClick={() => {setDrawer('dates')}}/>
          <PrimaryButton>
            Book
            <SearchSvg className="w-4 h-4"/>
          </PrimaryButton>
        </Tab>
        <Tab title="Møde & Konferencer">
        </Tab>
        <Tab title="Fest & Selskaber">
        </Tab>
      </TabGroup>

    </div>
    <SideDrawer isOpen={drawer === 'hotel'} onClose={closeDrawer} className="w-[400px]">
      <CloseButton className="absolute top-7 right-4" onClick={closeDrawer}/>
      <Heading>Hotels</Heading>
    </SideDrawer>
    <SideDrawer isOpen={drawer === 'rooms'} onClose={closeDrawer} className="w-[400px]">
      <RoomSelectionList rooms={rooms} setRooms={setRooms} onClose={closeDrawer}/>
      <CloseButton className="absolute top-7 right-4" onClick={closeDrawer}/>
    </SideDrawer>
    <SideDrawer isOpen={drawer === 'dates'} onClose={closeDrawer} className="w-[400px]">
      <CloseButton className="absolute top-7 right-4" onClick={closeDrawer}/>
      <Heading>Dates</Heading>

    </SideDrawer>
    </>
  )
}

export default SearchCard