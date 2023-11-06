import Image from 'next/image'
import DropdownSvg from '@/public/icons/select-dropdown.svg'

const DoubleSelect = ({ onClick, titles, values }) => {
  return (
    <button onClick={onClick} 
      className='relative min-w-[360px] flex w-full rounded-md border-[1px] border-brdr-gray px-3 py-2 hover:border-gray-400'>
      <div className='flex flex-col text-left w-full relative'>
        <span className='text-xs text-active-gray'>{titles[0]}</span>
        <span className='text-base font-semibold'>{values[0]}</span>
        <DropdownSvg className='absolute right-5 text-black w-4 top-0 bottom-0 my-auto rotate-180'/>
      </div>
      <div className='flex flex-col text-left w-full relative border-l-brdr-gray border-l-[1px] pl-3 -mr-3'>
        <span className='text-xs text-active-gray'>{titles[1]}</span>
        <span className='text-base font-semibold'>{values[1]}</span>
        <DropdownSvg className='absolute right-5 text-black w-4 top-0 bottom-0 my-auto rotate-180'/>
      </div>
    </button>
  )
}

export default DoubleSelect