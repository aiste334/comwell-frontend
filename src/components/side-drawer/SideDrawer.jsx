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
        className={`ml-auto min-w-[360px] bg-white h-screen px-4 pt-8 pb-4 cursor-default transition-all duration-[${animationDuration}ms] ${translateSnippet} ${className}`} 
        onClick={(e) => {e.stopPropagation()}}>
          {children}
      </div>
    </Modal>
  )
}

export default SideDrawer