import Heading from '@/src/components/ui/text/Heading'
import TabGroup from '@/src/components/ui/tabs/TabGroup'
import Tab from '@/src/components/ui/tabs/Tab'
import Select from '@/src/components/ui/select/Select'
import DoubleSelect from '@/src/components/ui/select/DoubleSelect'
import PrimaryButton from '@/src/components/ui/buttons/PrimaryButton'
import SearchSvg from '@/public/icons/search.svg'
import { useState } from 'react'
import HotelDrawerContent from '../drawers/hotel-selection/HotelDrawerContent'
import OccupancySelection from '../drawers/occupancy-selection/OccupancySelection'
import { getTodayDate, getTomorrowDate, formatToMonthDay, getTimeObject, formatToHoursMinutes } from '@/src/utils/dates'
import ShortSideDrawer from '../side-drawer/ShortSideDrawer'
import DateSelection from '../drawers/date-selection/DateSelection'
import RoomDrawerContent from '../drawers/room-selection/RoomDrawerContent'
import BackArrowButton from '../ui/buttons/circle-buttons/BackArrowButton'
import SideDrawer from '../side-drawer/SideDrawer'
import NumberSelection from '@/src/components/drawers/number-selection/NumberSelection'
import TimeSelection from '@/src/components/drawers/time-selection/TimeSelection'
import OptionSelection from '@/src/components/drawers/option-selection/OptionSelection'

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

  const INITIAL_TIMES = {
    start: getTimeObject(8),
    end: getTimeObject(16)
  }

  const [drawer, setDrawer] = useState()
  const closeDrawer = () => setDrawer()

  const [rooms, setRooms] = useState([INITIAL_ROOM])
  const roomCount = rooms.length
  const guestCount = rooms.reduce((prev, curr) => prev += curr.adults + curr.children + curr.toddlers, 0)

  const [dates, setDates] = useState(INITIAL_DATES)
  const startDateString = dates?.start ? formatToMonthDay(dates.start) : 'Select date'
  const endDateString = dates?.end ? formatToMonthDay(dates.end) : 'Select date'

  const [selectedHotel, setSelectedHotel] = useState(null);
  const hotelString = selectedHotel ? selectedHotel.name : 'Select hotel'

  const [times, setTimes] = useState(INITIAL_TIMES)
  const startTimeString = times?.start ? formatToHoursMinutes(times.start) : 'Select time'
  const endTimeString = times?.end ? formatToHoursMinutes(times.end) : 'Select time'

  const [arrangement, setArrangement] = useState(null)

  const [conferenceParticipantCount, setConferenceParticipantCount] = useState(8)

  const [partyParticipantCount, setPartyParticipantCount] = useState(25)

  return (
    <>
    <div className={'bg-white rounded-2xl w-[530px] p-8 drop-shadow-lg ' + className}>
      <Heading>Check ind på Comwell og kom ud i Danmark</Heading>
      <TabGroup className="py-2">
        <Tab title="Hotels" className="flex flex-col gap-3">
          <Select title="Hotel" onClick={() => {setDrawer('hotel')}}>{hotelString}</Select>
          <Select title="Rooms" onClick={() => {setDrawer('rooms')}}>{roomCount} Room, {guestCount} Person</Select>
          <DoubleSelect titles={["Check-in", "Check-out"]} values={[startDateString, endDateString]} onClick={() => {setDrawer('dates')}}/>
          <PrimaryButton disabled={!rooms && !dates} onClick={() => {setDrawer('suites')}}>
            Search
            <SearchSvg className="w-4 h-4"/>
          </PrimaryButton>
        </Tab>
        <Tab title="Meetings & Conferences" className="flex flex-col gap-3">
          <Select title="Number of participants" onClick={() => {setDrawer('conference-participants')}}>{conferenceParticipantCount}</Select>
          <Select title="Hotel" onClick={() => {setDrawer('hotel')}}>{hotelString}</Select>
          <Select title="Date" onClick={() => {setDrawer('dates')}}>{startDateString} - {endDateString}</Select>
          <DoubleSelect titles={["Start", "Finish"]} values={[startTimeString, endTimeString]} onClick={() => {setDrawer('times')}}/>
          <PrimaryButton disabled={!rooms && !dates} onClick={() => {setDrawer('suites')}}>
            Inquire
            <SearchSvg className="w-4 h-4"/>
          </PrimaryButton>
        </Tab>
        <Tab title="Parties & Events" className="flex flex-col gap-3">
          <Select title="Arrangement" onClick={() => {setDrawer('arrangement')}}>{arrangement?.name || 'Select type'}</Select>
          <Select title="Number of participants" onClick={() => {setDrawer('party-participants')}}>{partyParticipantCount}</Select>
          <Select title="Hotel" onClick={() => {setDrawer('hotel')}}>{hotelString}</Select>
          <Select title="Date" onClick={() => {setDrawer('dates')}}>{startDateString} - {endDateString}</Select>
          <PrimaryButton disabled={!rooms && !dates} onClick={() => {setDrawer('suites')}}>
            Search
            <SearchSvg className="w-4 h-4"/>
          </PrimaryButton>
        </Tab>
      </TabGroup>

    </div>
    <ShortSideDrawer isOpen={drawer === 'hotel'} onClose={closeDrawer}>
      <HotelDrawerContent selectedHotel={selectedHotel} onClose={closeDrawer} setSelectedHotel={setSelectedHotel}/>
    </ShortSideDrawer>
    <ShortSideDrawer isOpen={drawer === 'rooms'} onClose={closeDrawer}>
      <OccupancySelection rooms={rooms} setRooms={setRooms} onClose={closeDrawer}/>
    </ShortSideDrawer>
    <ShortSideDrawer isOpen={drawer === 'dates'} onClose={closeDrawer}>
      <DateSelection dates={dates} setDates={setDates} onClose={closeDrawer}/>
    </ShortSideDrawer>
    <SideDrawer isOpen={drawer === 'suites'} onClose={closeDrawer} className="w-[900px]">
      <BackArrowButton className="absolute top-4 left-5" onClick={closeDrawer}/>
      <RoomDrawerContent selectedHotel={selectedHotel} roomCount={roomCount} guestCount={guestCount} startDateString={startDateString} endDateString={endDateString}/>
    </SideDrawer>

    <ShortSideDrawer isOpen={drawer === 'arrangement'} onClose={closeDrawer}>
      <OptionSelection count={conferenceParticipantCount} setCount={setConferenceParticipantCount} onClose={closeDrawer}/>
    </ShortSideDrawer>
    <ShortSideDrawer isOpen={drawer === 'conference-participants'} onClose={closeDrawer}>
      <NumberSelection name={"Number of participants"} count={conferenceParticipantCount} setCount={setConferenceParticipantCount} onClose={closeDrawer}/>
    </ShortSideDrawer>
    <ShortSideDrawer isOpen={drawer === 'party-participants'} onClose={closeDrawer}>
      <NumberSelection name={"Number of participants"} count={partyParticipantCount} setCount={setPartyParticipantCount} onClose={closeDrawer}/>
    </ShortSideDrawer>
    <ShortSideDrawer isOpen={drawer === 'times'} onClose={closeDrawer}>
      <TimeSelection time={times} setTime={setTimes} onClose={closeDrawer} />
    </ShortSideDrawer>
    </>
  )
}

export default SearchCard