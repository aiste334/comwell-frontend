import { useEffect, useState } from 'react'
import Heading from '../../ui/text/Heading'
import DrawerPrimaryButton from '../../ui/buttons/DrawerPrimaryButton'
import RoomSelection from './RoomSelection'
import InfoSvg from '@/public/icons/info.svg'
import PlusButton from '../../ui/buttons/circle-buttons/PlusButton'

const RoomSelectionList = ({ rooms, setRooms, onClose }) => {

  const MAX_ROOMS = 9

  const INITIAL_ROOM = {
    adults: 1,
    children: 0,
    toddlers: 0
  }

  const fullRoomExists = rooms.find(room => room && (room.adults + room.children + room.toddlers >= 4))
  const roomCountLimitReached = rooms.length >= MAX_ROOMS

  const handleAddRoom = () => {
    if(roomCountLimitReached) return

    setRooms(prev => [...prev, INITIAL_ROOM])
  }

  const renderRooms = () => {
    return rooms.map((room, index) => {
      const setRoom = (updatedRoom) => {
        if(typeof updatedRoom !== 'function') {
          const updatedRooms = [...rooms]
          updatedRooms[index] = updatedRoom
          setRooms(updatedRooms)
        } else {
          setRooms(prev => {
            const updatedRooms = [...prev]
            updatedRooms[index] = updatedRoom(prev[index])
            return updatedRooms
          })
        }
      }

      const removeRoom = () => {
        setRooms(prev => prev.filter((r, i) => i !== index))
      }

      return <RoomSelection 
              key={index} 
              name={index+1} 
              room={room} 
              setRoom={setRoom} 
              removeRoom={removeRoom} 
              isFirst={!index}
            />
    })
  }

  return (
    <div className='h-full flex flex-col relative'>
      <Heading className="pb-8">Guests & Rooms</Heading>
      
      <div className='flex-1 pt-12 overflow-y-auto no-scrollbar relative'>
        <div>
          {renderRooms()}
        </div>

        { fullRoomExists &&
          <div className='text-cw-gray-600 flex mt-8 mb-16'>
            <InfoSvg className="p-2 w-8 "/>
            <p className='text-sm'>
              There can be a maximum of 4 people in a room. <br/>
              Contact the hotel directly for specific requests.
            </p>
          </div>
        }
        <div className='sticky bottom-0 bg-white w-full h-fit'>
          <div onClick={handleAddRoom}
            className='cursor-pointer select-none border-t-cw-gray-300 border-t-[1px] p-2 flex gap-2 items-center justify-center'>
              <PlusButton className="w-6 h-6"/>
              <span className='text-xs'>Add room</span>
          </div>

          { roomCountLimitReached &&
            <div className='text-cw-gray-600 flex items-center'>
              <InfoSvg className="p-2 w-8"/>
              <p className='text-sm py-4'>
                You can only book up to 9 rooms
              </p>
            </div>
          }
        </div>

        <div className="h-16"></div>
      </div>
      

      <DrawerPrimaryButton className="pt-12" onClick={onClose}>Choose</DrawerPrimaryButton>
    </div>
  )
}

export default RoomSelectionList