const TabButton = ({ children, onClick, isActive }) => {
  return (
    <button 
      className={"text-sm px-4 py-1 rounded-full " + (isActive ? "bg-active-gray text-white" : "bg-white") }
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default TabButton