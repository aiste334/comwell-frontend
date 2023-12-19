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

  const ARRANGEMENTS = [
    { id: 'baptism', name: 'Baptism' },
    { id: 'wedding', name: 'Wedding' },
    { id: 'company party', name: 'Company party' },
    { id: 'anniversary', name: 'Anniversary' },
    { id: 'christmas lunch', name: 'Christmas lunch' },
    { id: 'confirmation', name: 'Confirmation' },
    { id: 'rent-hotel', name: 'Rent entire hotel' },
    { id: 'memorial', name: 'Memorial' },
    { id: 'companies', name: 'Companies' },
  ]

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
            <PrimaryButton disabled={!rooms || !dates} onClick={() => {setDrawer('suites')}}>
              Search <SearchSvg className="w-4 h-4"/>
            </PrimaryButton>
          </Tab>
          <Tab title="Meetings & Conferences" className="flex flex-col gap-3">
            <Select title="Number of participants" onClick={() => {setDrawer('conference-participants')}}>{conferenceParticipantCount}</Select>
            <Select title="Hotel" onClick={() => {setDrawer('hotel')}}>{hotelString}</Select>
            <Select title="Date" onClick={() => {setDrawer('dates')}}>{startDateString} - {endDateString}</Select>
            <DoubleSelect titles={["Start", "Finish"]} values={[startTimeString, endTimeString]} onClick={[() => {setDrawer('time-start')}, () => {setDrawer('time-end')}]}/>
            <PrimaryButton disabled={!selectedHotel || !dates.start || !dates.end} onClick={() => {setDrawer('meeting')}}>
              Inquire <SearchSvg className="w-4 h-4"/>
            </PrimaryButton>
          </Tab>
          <Tab title="Parties & Events" className="flex flex-col gap-3">
            <Select title="Arrangement" onClick={() => {setDrawer('arrangement')}}>{arrangement?.name || 'Select type'}</Select>
            <Select title="Number of participants" onClick={() => {setDrawer('party-participants')}}>{partyParticipantCount}</Select>
            <Select title="Hotel" onClick={() => {setDrawer('hotel')}}>{hotelString}</Select>
            <Select title="Date" onClick={() => {setDrawer('dates')}}>{startDateString} - {endDateString}</Select>
            <PrimaryButton disabled={!rooms && !dates} onClick={() => {setDrawer('party')}}>
              Inquire <SearchSvg className="w-4 h-4"/>
            </PrimaryButton>
          </Tab>
        </TabGroup>

      </div>
      <SideDrawer isOpen={drawer === 'suites'} onClose={closeDrawer} className="w-[900px]">
        <BackArrowButton className="absolute top-4 left-5" onClick={closeDrawer}/>
        <RoomDrawerContent selectedHotel={selectedHotel} roomCount={roomCount} guestCount={guestCount} startDateString={startDateString} endDateString={endDateString}/>
      </SideDrawer>
      
      <ShortSideDrawer isOpen={drawer === 'hotel'} onClose={closeDrawer}>
        <HotelDrawerContent selectedHotel={selectedHotel} onClose={closeDrawer} setSelectedHotel={setSelectedHotel}/>
      </ShortSideDrawer>
      <ShortSideDrawer isOpen={drawer === 'rooms'} onClose={closeDrawer}>
        <OccupancySelection rooms={rooms} setRooms={setRooms} onClose={closeDrawer}/>
      </ShortSideDrawer>
      <ShortSideDrawer isOpen={drawer === 'dates'} onClose={closeDrawer}>
        <DateSelection dates={dates} setDates={setDates} onClose={closeDrawer}/>
      </ShortSideDrawer>

      <ShortSideDrawer isOpen={drawer === 'arrangement'} onClose={closeDrawer}>
        <OptionSelection options={ARRANGEMENTS} selected={arrangement} setSelected={setArrangement} onClose={closeDrawer} />
      </ShortSideDrawer>
      <ShortSideDrawer isOpen={drawer === 'conference-participants'} onClose={closeDrawer}>
        <NumberSelection min={1} name={"Number of participants"} count={conferenceParticipantCount} setCount={setConferenceParticipantCount} onClose={closeDrawer}/>
      </ShortSideDrawer>
      <ShortSideDrawer isOpen={drawer === 'party-participants'} onClose={closeDrawer}>
        <NumberSelection min={1} name={"Number of participants"} count={partyParticipantCount} setCount={setPartyParticipantCount} onClose={closeDrawer}/>
      </ShortSideDrawer>
      <ShortSideDrawer isOpen={drawer === 'time-start' || drawer === 'time-end'} onClose={closeDrawer}>
        { drawer === 'time-start' ?
            <TimeSelection time={times.start} setTime={(v) => setTimes(prev => ({ ...prev, start: v }))} name={'Start time'} onClose={() => setDrawer('time-end')} />
          :
            <TimeSelection time={times.end} setTime={(v) => setTimes(prev => ({ ...prev, end: v }))} name={'End time'} onClose={closeDrawer} />
        }
      </ShortSideDrawer>
    </>
  )
}

export default SearchCard