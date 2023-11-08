import { useEffect, useState } from "react"
import ReactDOM from "react-dom"

const SideDrawer = ({ isOpen, onClose = () => {}, children, animationDuration = 300, className }) => {

  const [portalRoot, setPortalRoot] = useState() 
  const [translateSnippet, setTranslateSnippet] = useState("translate-x-full")
  const [coverOpacity, setCoverOpacity] = useState("0")

  useEffect(() => {
    setPortalRoot(document.querySelector('main'))
  }, [])

  useEffect(() => {
    if(isOpen) {
      setTranslateSnippet("translate-x-0")
      setCoverOpacity("60")
    } 
  }, [isOpen])

  const handleClose = () => {
      setTranslateSnippet("translate-x-full")
      setCoverOpacity("0")

    setTimeout(() => {
      onClose()
    }, animationDuration)
  }
  

  if (!isOpen || !portalRoot) return null

  const loadDiv = <div className="bg-black/60"></div>

  return ReactDOM.createPortal(
    <div className={`font-fellix z-50 fixed top-0 left-0 w-screen h-screen cursor-pointer transition-all duration-[${animationDuration}ms] bg-black/${coverOpacity}`} onClick={handleClose}>
      <div className={`fixed top-0 right-0 min-w-[360px] bg-white h-full ml-auto px-4 pt-8 cursor-default transition-all duration-[${animationDuration}ms] ${translateSnippet} ${className}`} onClick={(e) => {e.stopPropagation()}}>
        {children}
      </div>
    </div>,
    portalRoot
  )
}

export default SideDrawer