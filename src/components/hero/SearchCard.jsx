import Heading from '@/src/components/ui/text/Heading'
import TabGroup from '@/src/components/ui/tabs/TabGroup'
import Tab from '@/src/components/ui/tabs/Tab'
import Select from '@/src/components/ui/select/Select'
import DoubleSelect from '@/src/components/ui/select/DoubleSelect'
import PrimaryButton from '@/src/components/ui/buttons/PrimaryButton'
import SearchSvg from '@/public/icons/search.svg'
import { useState } from 'react'
import HotelDrawerContent from '../drawers/HotelDrawerContent'
import NarrowDrawer from '../side-drawer/NarrowDrawer'
import OccupancySelection from '../drawers/occupancy-selection/OccupancySelection'
import { getTodayDate, getTomorrowDate, formatToMonthDay } from '@/src/utils/dates'
import ShortSideDrawer from '../side-drawer/ShortSideDrawer'
import DateSelection from '../drawers/date-selection/DateSelection'
import SuiteDrawerContent from '../drawers/suite-selection/SuiteDrawerContent'
import BackArrowSvg from "@/public/icons/backarrow.svg"
import BackArrowButton from '../ui/buttons/circle-buttons/BackArrowButton'


const SearchCard = ({ className }) => {

  const INITIAL_ROOM = {
    adults: 1,
    children: 0,
    toddlers: 0
  }

  const INITIAL_DATES = {
    start: getTodayDate(),
    end: getTomorrowDate()
  }

  const [drawer, setDrawer] = useState()
  const closeDrawer = () => setDrawer()

  const [rooms, setRooms] = useState([INITIAL_ROOM])
  const roomCount = rooms.length
  const guestCount = rooms.reduce((prev, curr) => prev += curr.adults + curr.children + curr.toddlers, 0)

  const [dates, setDates] = useState(INITIAL_DATES)
  const startDateString = dates?.start ? formatToMonthDay(dates.start) : 'Select date'
  const endDateString = dates?.end ? formatToMonthDay(dates.end) : 'Select date'

  return (
    <>
    <div className={'bg-white rounded-2xl w-[530px] p-8 drop-shadow-lg ' + className}>
      <Heading>Book mødelokale på Copenhagen Portside</Heading>
      <TabGroup className="py-2">
        <Tab title="Overnatning" className="flex flex-col gap-3">
          <Select title="Hotel" onClick={() => {setDrawer('hotel')}}>Select hotel</Select>
          <Select title="Rooms" onClick={() => {setDrawer('rooms')}}>{roomCount} Room, {guestCount} Person</Select>
          <DoubleSelect titles={["Check-in", "Check-out"]} values={[startDateString, endDateString]} onClick={() => {setDrawer('dates')}}/>
          <PrimaryButton onClick={() => {setDrawer('suites')}}>
            Search
            <SearchSvg className="w-4 h-4"/>
          </PrimaryButton>
        </Tab>
        <Tab title="Møde & Konferencer">
        </Tab>
        <Tab title="Fest & Selskaber">
        </Tab>
      </TabGroup>

    </div>
    <ShortSideDrawer isOpen={drawer === 'hotel'} onClose={closeDrawer}>
      <HotelDrawerContent />
    </ShortSideDrawer>

    <ShortSideDrawer isOpen={drawer === 'rooms'} onClose={closeDrawer}>
      <OccupancySelection rooms={rooms} setRooms={setRooms} onClose={closeDrawer}/>
    </ShortSideDrawer>

    <ShortSideDrawer isOpen={drawer === 'dates'} onClose={closeDrawer}>
      <DateSelection dates={dates} setDates={setDates} onClose={closeDrawer}/>
    </ShortSideDrawer>
    <SideDrawer isOpen={drawer === 'suites'} onClose={closeDrawer} className="w-[900px]">
       <BackArrowButton className="absolute top-4 left-5" onClick={closeDrawer}/>
        <SuiteDrawerContent />
      </SideDrawer>
    </>
  )
}

export default SearchCard