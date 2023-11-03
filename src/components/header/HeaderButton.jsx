const HeaderButton = ({ children, onClick }) => {
  return (
    <button className='flex gap-2 items-center text-white' onClick={onClick}>{children}</button>
  )
}

export default HeaderButton