import { useState } from "react"
import Modal from "../modals/Modal"

const SideDrawer = ({ isOpen, onClose = () => {}, children, animationDuration = 300, className }) => {

  const [translateSnippet, setTranslateSnippet] = useState("translate-x-full")

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      animationDuration={animationDuration}
      setTranslateSnippet={setTranslateSnippet}
    >
      <div 
        className={`fixed top-0 right-0 min-w-[360px] overflow-scroll bg-white h-full ml-auto px-4 pt-8 cursor-default transition-all duration-[${animationDuration}ms] ${translateSnippet} ${className}`} 
        onClick={(e) => {e.stopPropagation()}}>
          {children}
      </div>
    </Modal>
  )
}

export default SideDrawer