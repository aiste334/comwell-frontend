
import React, { useState } from 'react'
import CalendarSvg from "@/public/icons/calendar.svg"
import BustSvg from "@/public/icons/bust.svg"
import RoomDrawerHeaderInfo from '../drawers/room-selection/RoomDrawerHeaderInfo'
import LocationPointerSvg from "@/public/icons/locationpointer.svg"
import Title from '../ui/text/Title'
import Input from '../ui/inputs/Input'
import PrimaryButton from '../ui/buttons/PrimaryButton'
import OverviewRoom from '../overview/OverviewRoom'
import OverviewBookingComponent from '../overview/OverviewBookingComponent'

function GuestInfoContent({ fullName, setFullName, email, setEmail, phoneNumber, setPhoneNumber }) {

  return (
        <>
            <Title>Gæsteinformation</Title>
            <div className='flex flex-col gap-2 pr-5 pb-10 mb-10 border-b-[1px]'>
                <Input label="Fulde navn" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input label="Telefon" type='number' value={phoneNumber} placeholder='+45' onChange={(e) => setPhoneNumber(e.target.value)}/>
                <Input label="Tilføj adresse nu og spar tid ved check-in." />
            </div>
        </>
  )
}

export default GuestInfoContent