
import React, { useState } from 'react'
import CalendarSvg from "@/public/icons/calendar.svg"
import BustSvg from "@/public/icons/bust.svg"
import RoomDrawerHeaderInfo from '../drawers/room-selection/RoomDrawerHeaderInfo'
import LocationPointerSvg from "@/public/icons/locationpointer.svg"
import Title from '../ui/text/Title'
import Input from '../ui/inputs/Input'

function GuestInfoContent() {

    const [fuldenavn, setFuldeNavn] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  

  return (
    <div className="flex flex-row pl-[55px] pt-10 w-full h-full">
        <div className='h-full w-1/2'>
            <div className='fixed top-0  items-center h-[68px] flex text-xs'>
                <RoomDrawerHeaderInfo 
                    text='12 Dec. - 13 Dec.'
                    Icon={CalendarSvg}
                />
                <RoomDrawerHeaderInfo
                    text='1 room, 2 people'
                    Icon={BustSvg}
                />
                <RoomDrawerHeaderInfo
                    text='Hotel Name'
                    Icon={LocationPointerSvg}
                /> 
            </div>
            <div className='my-10'>
                <Title>Gæsteinformation</Title>
            </div>      
            <div className='flex flex-col gap-2 pr-5'>
                <Input label="Fulde navn" value={fuldenavn} onChange={(e) => setFuldeNavn(e.target.value)}/>
                <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input label="Telefon" type='number' placeholder='+45'/>
                <Input label="Tilføj adresse nu og spar tid ved check+in." />
            </div>  
        </div>




        <div className='h-full w-1/2 bg-slate-200'>
            <div className='h-full flex flex-col'>
            <div className='my-10'>
                <Title>Oversigt</Title>
            </div>

                

            <div className="flex items-end mt-auto border-t-cw-gray-300 border-t-[1px] py-6  w-full">
                <div className='w-full flex flex-row justify-between'>
                <div>
                    <Title>Total</Title>
                </div>
                <div>
                    {/* <Title>DKK {selectedRoom ? selectedRoom.price : '0.00'}</Title> */}
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  
  )
}

export default GuestInfoContent