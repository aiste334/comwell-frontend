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
import { getTodayDate, getTomorrowDate, formatToMonthDay } from '@/src/utils/dates'
import ShortSideDrawer from '../side-drawer/ShortSideDrawer'
import DateSelection from '../drawers/date-selection/DateSelection'
import SideDrawer from '../side-drawer/SideDrawer'
import useFormSteps from '@/src/hooks/useFormSteps'
import BookingFormSection from '../booking-steps/BookingFormSection'


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

  function closeBookingDrawer(){
    reset();
    closeDrawer();
    setSelectedRoom(null);
  }


  const [rooms, setRooms] = useState([INITIAL_ROOM])
  const roomCount = rooms.length
  const guestCount = rooms.reduce((prev, curr) => prev += curr.adults + curr.children + curr.toddlers, 0)

  const [dates, setDates] = useState(INITIAL_DATES)
  const startDateString = dates?.start ? formatToMonthDay(dates.start) : 'Select date'
  const endDateString = dates?.end ? formatToMonthDay(dates.end) : 'Select date'

  const [selectedHotel, setSelectedHotel] = useState(null);
  const hotelString = selectedHotel ? selectedHotel.name : 'Select hotel'

  const [selectedRoom, setSelectedRoom] = useState(null);
  const onRoomCardClick = (room) => {
    setSelectedRoom(room);
    next();
  };

  const { currentStep, next, prev, reset } = useFormSteps(4)


  return (
    <>
    <div className={'bg-white rounded-2xl w-[530px] p-8 drop-shadow-lg ' + className}>
      <Heading>Check ind på Comwell og kom ud i Danmark</Heading>
      <TabGroup className="py-2">
        <Tab title="Overnatning" className="flex flex-col gap-3">
          <Select title="Hotel" onClick={() => {setDrawer('hotel')}}>{hotelString}</Select>
          <Select title="Rooms" onClick={() => {setDrawer('rooms')}}>{roomCount} Room, {guestCount} Person</Select>
          <DoubleSelect titles={["Check-in", "Check-out"]} values={[startDateString, endDateString]} onClick={() => {setDrawer('dates')}}/>
          <PrimaryButton disabled={!rooms && !dates} onClick={() => {selectedHotel? setDrawer('suites') : null}}>
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
      <HotelDrawerContent selectedHotel={selectedHotel} onClose={closeDrawer} setSelectedHotel={setSelectedHotel}/>
    </ShortSideDrawer>

    <ShortSideDrawer isOpen={drawer === 'rooms'} onClose={closeDrawer}>
      <OccupancySelection rooms={rooms} setRooms={setRooms} onClose={closeDrawer}/>
    </ShortSideDrawer>

    <ShortSideDrawer isOpen={drawer === 'dates'} onClose={closeDrawer}>
      <DateSelection dates={dates} setDates={setDates} onClose={closeDrawer}/>
    </ShortSideDrawer>

    <SideDrawer isOpen={drawer === 'suites'} onClose={closeBookingDrawer} className="w-[900px]">
      <BookingFormSection closeDrawer={closeDrawer} closeBookingDrawer={closeBookingDrawer} selectedHotel={selectedHotel} selectedRoom={selectedRoom} roomCount={roomCount} guestCount={guestCount} startDateString={startDateString} endDateString={endDateString} onRoomCardClick={onRoomCardClick} currentStep={currentStep} next={next} prev={prev} reset={reset}></BookingFormSection>
    </SideDrawer>
    </>
  )
}

export default SearchCard