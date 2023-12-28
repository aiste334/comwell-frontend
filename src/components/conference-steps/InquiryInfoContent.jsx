  import React, { useState, useEffect } from 'react';
  import { useSession } from 'next-auth/react';
  import Title from '../ui/text/Title';
  import Input from '../ui/inputs/Input';
  import Select from '@/src/components/ui/select/Select';
  import ShortSideDrawer from '../side-drawer/ShortSideDrawer';
  import NumberSelection from '@/src/components/drawers/number-selection/NumberSelection';
  import useBookingInfoFormatting from '@/src/hooks/useBookingInfoFormatting';
  import DoubleSelect from '@/src/components/ui/select/DoubleSelect';
  import TimeSelection from '@/src/components/drawers/time-selection/TimeSelection';
  import HotelDrawerContent from '../drawers/hotel-selection/HotelDrawerContent';
  import DateSelection from '../drawers/date-selection/DateSelection';
  import Checkbox from '../ui/inputs/Checkbox';
  import CalendarSvg from "@/public/icons/calendar.svg"
  import BustSvg from "@/public/icons/bust.svg"
  import LocationPointerSvg from "@/public/icons/locationpointer.svg"


  function InquiryInfoContent({ 
    setFullName, 
    setEmail, 
    setPhoneNumber, 
    dates,
    times,
    conferenceParticipantCount,
    selectedHotel,
    setComment,
    setCompany,
    setDepartment,
    setNameOfMeeting,
    corporation,
    department,
    nameOfMeeting,
    comment,
    isAccommodationInterested,
    setIsAccommodationInterested,
    agreeWithTC,
    setAgreeWithTC,
    signUpForNewsletter,
    setSignUpForNewsletter
  }) {

    const { startDateString, endDateString, startTimeString, endTimeString } = useBookingInfoFormatting({ selectedHotel,times, dates })

    const { data: session } = useSession();
    const [loggedIn, setLoggedIn] = useState(false);
    const [drawer, setDrawer] = useState();
    const closeDrawer = () => setDrawer();


    useEffect(() => {
      if (session) {
        setFullName(session.user.name || '');
        setEmail(session.user.email || '');
        setPhoneNumber(session.user.phoneNumber || '');
        setLoggedIn(true);
        console.log(session)
      } else {
        setLoggedIn(false);
      }
   
    }, [session, setFullName, setEmail, setPhoneNumber,dates,times]);

    /*
    MIX OF BULLSHIT THAT DOESNT SEEM TO WROK ATM
  <div className='flex flex-col gap-2 pr-5 pb-10 mb-10 border-b-[1px]'>
        </div>
        <ShortSideDrawer isOpen={drawer === 'conference-participants'} onClose={closeDrawer}>
          <NumberSelection 
            min={1} 
            name={"Number of participants"} 
            count={conferenceParticipantCount} 
            setCount={setConferenceParticipantCount} 
            onClose={closeDrawer}
          />
        </ShortSideDrawer>
        <ShortSideDrawer isOpen={drawer === 'time-start' || drawer === 'time-end'} onClose={closeDrawer}>
          {drawer === 'time-start' ? (
            <TimeSelection 
              time={safeTimes.start} 
              setTime={(v) => setTimes(prev => ({ ...prev, start: v }))}
              name={'Start time'} 
              onClose={() => setDrawer('time-end')} 
            />
          ) : (
            <TimeSelection 
              time={safeTimes.end} 
              setTime={(v) => setTimes(prev => ({ ...prev, end: v }))}
              name={'End time'} 
              onClose={closeDrawer} 
            />
          )}
        </ShortSideDrawer>
        <ShortSideDrawer isOpen={drawer === 'hotel'} onClose={closeDrawer}>
          <HotelDrawerContent 
            selectedHotel={selectedHotel} 
            onClose={closeDrawer} 
            setSelectedHotel={setSelectedHotel}
          />
        </ShortSideDrawer>
        <ShortSideDrawer isOpen={drawer === 'dates'} onClose={closeDrawer}>
          <DateSelection 
            dates={dates} 
            setDates={setDates} 
            onClose={closeDrawer}
          />
        </ShortSideDrawer>

    
    */
    return (
      <>
        <Title>My query</Title>
        <div className='flex flex-col'>
                  <span className='px-4 gap-2 flex items-center'>
                      <CalendarSvg className='h-[15px] w-[15px]'/> 
                      {`${startDateString || '?'} - ${endDateString || '?'}`}
                  </span>
                  <span className='px-4 gap-2 flex items-center'>
                      <CalendarSvg className='h-[15px] w-[15px]'/> 
                      {`${startTimeString || '?'} - ${endTimeString || '?'}`}
                  </span>
                  <span className='px-4 gap-2 flex items-center'>
                      <BustSvg className='h-[15px] w-[15px]'/>
                      {`${conferenceParticipantCount} people`}
                  </span>              
                  <span className='px-4 gap-2 flex items-center'>
                      <LocationPointerSvg className='h-[15px] w-[15px]'/>
                      {selectedHotel?.name}
                  </span>
              </div>
        <Checkbox 
          label={"Interested in accommodation"}
          checked={isAccommodationInterested}
          onChange={(e) => setIsAccommodationInterested(e.target.checked)}
        />

        <Title>Meeting booker's info</Title>
        <div className='flex flex-col gap-2 pr-5 pb-10 mb-10 border-b-[1px]'>
        <Input 
          label="Corporation" 
          value={corporation} 
          onChange={(e) => setCompany(e.target.value)}
        />
        <Input 
          label="Department" 
          value={department} 
          onChange={(e) => setDepartment(e.target.value)} 
        />
        <Input 
          label="Name of Meeting" 
          value={nameOfMeeting} 
          onChange={(e) => setNameOfMeeting(e.target.value)} 
        />

        <Input 
          label="Full Name" 
          value={loggedIn ? session.user.name || '' : ''} 
          onChange={(e) => setFullName(e.target.value)} 
        />
        <Input 
          label="Email" 
          value={loggedIn ? session.user.email || '' : ''} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Input
          label="Phone Number"
          type='text'
          value={loggedIn ? session.user.phoneNumber || '' : ''} 
          placeholder='+45'
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Title>Comment</Title>
        <Input 
          label="Comment" 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
        />

          {/* Conditional rendering for Continue button and error message */}
          {!loggedIn && (
            <div className="text-red-500 mt-2">You need to be logged in to continue.</div>
          )}
          
        </div>
        <Checkbox 
          label={"I agree with the T&C"}
          checked={agreeWithTC}
          onChange={(e) => setAgreeWithTC(e.target.checked)}
        />
        <Checkbox 
          label={"I want to sign up for a newsletter"}
          checked={signUpForNewsletter}
          onChange={(e) => setSignUpForNewsletter(e.target.checked)}
        />

      </>
    );
  }

  export default InquiryInfoContent;
