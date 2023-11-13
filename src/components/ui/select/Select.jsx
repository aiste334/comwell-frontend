import DropdownSvg from '@/public/icons/select-dropdown.svg'

const Select = ({ onClick, title, children }) => {
  return (
    <button onClick={onClick} 
      className='group relative min-w-[360px] w-full rounded-md border-[1px] border-cw-gray-300 focus:border-black px-3 py-2 hover:border-gray-400'>
      <div className='flex flex-col text-left'>
        <span className='text-xs text-active-gray'>{title}</span>
        <span className='text-base font-semibold'>{children}</span>
      </div>
      <DropdownSvg className='absolute right-5 text-black w-4 top-0 bottom-0 my-auto rotate-180 group-focus:rotate-0 transition-transform duration-300'/>
    </button>
  )
}

export default Select