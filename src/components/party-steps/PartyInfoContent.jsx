import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Title from '../ui/text/Title';
import Input from '../ui/inputs/Input';
import useBookingInfoFormatting from '@/src/hooks/useBookingInfoFormatting';
import Checkbox from '../ui/inputs/Checkbox';
import CalendarSvg from "@/public/icons/calendar.svg"
import BustSvg from "@/public/icons/bust.svg"
import LocationPointerSvg from "@/public/icons/locationpointer.svg"
import Sun from "@/public/icons/sun.svg"

function PartyInfoContent({ 
  setFullName, 
  setEmail, 
  setPhoneNumber, 
  dates,
  times,
  partyParticipantCount,
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
  setSignUpForNewsletter,
  arrangement
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
    } else {
      setLoggedIn(false);
    }
 
  }, [session, setFullName, setEmail, setPhoneNumber,dates,times]);

  return (
    <>
      <Title>My query</Title>
      <div className='flex flex-col'>
                <span className='px-4 gap-2 flex items-center'>
                    <CalendarSvg className='h-[15px] w-[15px]'/> 
                    {`${startDateString || '?'} - ${endDateString || '?'}`}
                </span>
                <span className='px-4 gap-2 flex items-center'>
                    <BustSvg className='h-[15px] w-[15px]'/>
                    {`${partyParticipantCount} people`}
                </span>              
                <span className='px-4 gap-2 flex items-center'>
                    <LocationPointerSvg className='h-[15px] w-[15px]'/>
                    {selectedHotel?.name}
                </span>
                <span className='px-4 gap-2 flex items-center'>
                    <Sun className='h-[15px] w-[15px]'/>
                    {arrangement.name}
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
      
      <Input 
        label="Corporation" 
        value={corporation} 
        onChange={(e) => setCompany(e.target.value)}
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

export default PartyInfoContent;
