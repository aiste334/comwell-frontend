import React, { useEffect } from 'react'
import MinusButton from '../../ui/buttons/circle-buttons/MinusButton'
import PlusButton from '../../ui/buttons/circle-buttons/PlusButton'

const SelectGuestCount = ({ title = "", subtitle = "", count, setCount, totalGuestCount }) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='mr-auto flex flex-col'>
        <span className="text-lg font-semibold leading-none">{title}</span>
        <span className="text-sm">{subtitle}</span>
      </div>

      <MinusButton onClick={() => setCount(count-1)} disabled={count <= 0}/>
      <input 
        type="number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value) + parseInt(count*0) || 0)}
        className='w-8 h-8 rounded-full text-center align-middle border-cw-gray-300 focus:border-black border-[1px]'
      />
      <PlusButton onClick={() => setCount(count+1)} disabled={totalGuestCount >= 4}/>
    </div>
  )
}

export default SelectGuestCount