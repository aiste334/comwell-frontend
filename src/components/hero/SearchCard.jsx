import Heading from '@/src/components/ui/text/Heading'
import TabGroup from '@/src/components/ui/tabs/TabGroup'
import Tab from '@/src/components/ui/tabs/Tab'
import Select from '@/src/components/ui/select/Select'
import DoubleSelect from '@/src/components/ui/select/DoubleSelect'
import PrimaryButton from '@/src/components/ui/buttons/PrimaryButton'
import SearchSvg from '@/public/icons/search.svg'
import { useState, useEffect } from 'react'
import HotelDrawerContent from '../drawers/hotel-selection/HotelDrawerContent'
import OccupancySelection from '../drawers/occupancy-selection/OccupancySelection'
import { getTodayDate, getTomorrowDate, formatToMonthDay, getTimeObject, formatToHoursMinutes } from '@/src/utils/dates'
import ShortSideDrawer from '../side-drawer/ShortSideDrawer'
import DateSelection from '../drawers/date-selection/DateSelection'
import SideDrawer from '../side-drawer/SideDrawer'
import useFormSteps from '@/src/hooks/useFormSteps'
import BookingFormSection from '../booking-steps/BookingFormSection'
import useBookingInfoFormatting from '@/src/hooks/useBookingInfoFormatting'
import NumberSelection from '@/src/components/drawers/number-selection/NumberSelection'
import TimeSelection from '@/src/components/drawers/time-selection/TimeSelection'
import OptionSelection from '@/src/components/drawers/option-selection/OptionSelection'
import InquiryFormSection from '../conference-steps/InquiryFormSection'
import PartyFormSection from '../party-steps/PartyFormSection'

const SearchCard = ({ className }) => {
  const [hotels, setHotels] = useState([])

  //fetching this here since JFC i need it in a lot of places
  useEffect(() => {
    async function getHotels () {
        const response = await fetch('http://localhost:4000/hotels')
        const data = await response.json()
        if(!data) return
        
        setHotels(data)
    }

    getHotels()
}, [])

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

  function closeBookingDrawer(){
    formSteps.reset();
    closeDrawer();
    setSelectedRoom(null);
  }


  const [rooms, setRooms] = useState([INITIAL_ROOM])
  const [dates, setDates] = useState(INITIAL_DATES)
  const [arrangement, setArrangement] = useState(null)
  const { startDateString, endDateString, roomCount, guestCount } = useBookingInfoFormatting({ rooms, dates })
  const [selectedHotel, setSelectedHotel] = useState(null);
  const hotelString = selectedHotel ? selectedHotel.name : 'Select hotel'
  const formSteps = useFormSteps(4)
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedConference, setSelectedConference] = useState(null);
  const [selectedParty, setSelectedParty] = useState(null);
  const [times, setTimes] = useState(INITIAL_TIMES)
  const startTimeString = times?.start ? formatToHoursMinutes(times.start) : 'Select time'
  const endTimeString = times?.end ? formatToHoursMinutes(times.end) : 'Select time'
  const [conferenceParticipantCount, setConferenceParticipantCount] = useState(8)
  const [partyParticipantCount, setPartyParticipantCount] = useState(25)

  const onRoomCardClick = (room) => {
    setSelectedRoom(room);
    formSteps.next();
  };

  const onConferenceClick = (conference) => {
    console.log("conference: " + JSON.stringify(conference));
    setSelectedConference(conference);
  
    const matchedHotel = hotels.find(hotel =>
      hotel.conferences.some(conf => conf.type === conference.type)
    );
  
    setSelectedHotel(matchedHotel);
    formSteps.next();
  };

  const onPartyClick = (party) => {
    console.log("Party clicked: ", JSON.stringify(party));
    setSelectedParty(party);

    const matchedHotel = hotels.find(hotel =>
      hotel.parties.some(p => p.type === party.type)
    );

    console.log("Matched hotel for party: ", matchedHotel);

    setSelectedHotel(matchedHotel);
    formSteps.next();
  };
  //testing and debugging y´all
    useEffect(() => {
      console.log("selected conference: " + JSON.stringify(selectedConference));
  }, [selectedConference]);
    
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
      
      <SideDrawer isOpen={drawer === 'suites'} onClose={closeBookingDrawer} className="w-[900px]">
        <BookingFormSection 
          closeDrawer={closeDrawer} 
          closeBookingDrawer={closeBookingDrawer} 
          selectedHotel={selectedHotel} 
          selectedRoom={selectedRoom} 
          rooms={rooms}
          dates={dates}
          onRoomCardClick={onRoomCardClick} 
          formSteps={formSteps}
        />
      </SideDrawer>

      <SideDrawer isOpen={drawer === 'meeting'} onClose={closeBookingDrawer} className="w-[900px]">
        <InquiryFormSection 
          closeDrawer={closeDrawer} 
          closeBookingDrawer={closeBookingDrawer} 
          selectedHotel={selectedHotel} 
          selectedConference={selectedConference} 
          rooms={rooms}
          dates={dates}
          times={times}
          onConferenceClick={onConferenceClick} 
          formSteps={formSteps}
          conferenceParticipantCount={conferenceParticipantCount}
          hotels={hotels}
        />
      </SideDrawer>
      
      <SideDrawer isOpen={drawer === 'party'} onClose={closeBookingDrawer} className="w-[900px]">
        <PartyFormSection 
          closeDrawer={closeDrawer} 
          closeBookingDrawer={closeBookingDrawer} 
          selectedHotel={selectedHotel} 
          selectedRoom={selectedRoom} 
          rooms={rooms}
          dates={dates}
          times={times}
          onPartyClick={onPartyClick} 
          formSteps={formSteps}
          partyParticipantCount={partyParticipantCount}
          hotels={hotels}
          arrangement = {arrangement}
        />
      </SideDrawer>

      <ShortSideDrawer isOpen={drawer === 'hotel'} onClose={closeDrawer}>
        <HotelDrawerContent
            hotels={hotels} 
            selectedHotel={selectedHotel}
            onClose={closeDrawer}
            setSelectedHotel={setSelectedHotel}
        />
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