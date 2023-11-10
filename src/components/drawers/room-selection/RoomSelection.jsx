import { useEffect } from "react"
import SelectGuestCount from "./SelectGuestCount"
import Label from "../../ui/text/Label"

const RoomSelection = ({ name, room, setRoom, removeRoom, isFirst = false }) => {

  if(!room) return null
  
  const totalGuestCount = room ? (room.adults + room.children + room.toddlers) : 10

  return (
    <div className='flex flex-col p-2 py-8 first:pt-0 border-b-[1px] border-b-cw-gray-300 last:border-b-0 last:border-b-transparent'>
      <div className='flex justify-between items-center mb-4'>
        <Label>Room {name}</Label>
        { !isFirst && 
          <span className='text-[13px] underline cursor-pointer leading-3'
            onClick={removeRoom}
          >Remove</span>
        }
      </div>
      <div className="flex flex-col gap-6">
        <SelectGuestCount
          title="Adults" 
          subtitle="" 
          count={room.adults} 
          setCount={(v) => setRoom(prev => ({ ...prev, adults: v }))}
          minAllowed={1}
          totalGuestCount={totalGuestCount}
        />

        <SelectGuestCount
          title="Children" 
          subtitle="3 - 11 years" 
          count={room.children} 
          setCount={(v) => setRoom(prev => ({ ...prev, children: v }))}
          totalGuestCount={totalGuestCount}
        />

        <SelectGuestCount
          title="Toddlers" 
          subtitle="0 - 2 years" 
          count={room.toddlers} 
          setCount={(v) => setRoom(prev => ({ ...prev, toddlers: v }))}
          totalGuestCount={totalGuestCount}
        />
      </div>
    </div>
  )
}

export default RoomSelection