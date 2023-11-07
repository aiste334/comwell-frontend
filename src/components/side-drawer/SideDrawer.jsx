import { useEffect, useState } from "react"
import ReactDOM from "react-dom"

const SideDrawer = ({ isOpen, onClose = () => {}, children }) => {

  const [portalRoot, setPortalRoot] = useState() 

  useEffect(() => {
    setPortalRoot(document.body)
  }, [])

  if (!isOpen || !portalRoot) return null

  return ReactDOM.createPortal(
    <div className='z-50 fixed top-0 left-0 w-screen h-screen bg-black/60' onClick={() => onClose()}>
      <div className="min-w-[360px] w-fit bg-white h-full ml-auto px-4 py-10" onClick={(e) => {e.stopPropagation()}}>
        {children}
      </div>
    </div>,
    portalRoot
  )
}

export default SideDrawer