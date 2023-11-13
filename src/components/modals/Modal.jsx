import { useEffect, useState } from "react"
import ReactDOM from "react-dom"

const Modal = ({ isOpen, onClose, children, animationDuration, setTranslateSnippet = () => {}, createPortal = true }) => {

  const [portalRoot, setPortalRoot] = useState() 
  const [coverOpacity, setCoverOpacity] = useState("0")

  useEffect(() => {
    setPortalRoot(document.querySelector('main'))
  }, [])

  useEffect(() => {
    if(isOpen) {
      setTranslateSnippet("translate-x-0")
      setCoverOpacity("60")
    } 
  }, [isOpen, setTranslateSnippet])

  const handleClose = () => {
    setTranslateSnippet("translate-x-full")
    setCoverOpacity("0")

    setTimeout(() => {
      onClose()
    }, animationDuration)
  }

  if (!isOpen || !portalRoot) return

  const loadDiv = <div className="bg-black/60"></div>

  const finalModal = (
    <div className={`font-fellix z-50 fixed top-0 left-0 w-screen h-screen cursor-pointer transition-all duration-[${animationDuration}ms] bg-black/${coverOpacity}`} onClick={handleClose}>
      {children}
    </div>
  )

  if(!createPortal) {
    return finalModal
  }

  return ReactDOM.createPortal(
    finalModal,
    portalRoot
  )
}

export default Modal