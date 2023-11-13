import Modal from "../Modal"
import LogInForm from "./LogInForm"

const LogInModal = ({ isOpen, onClose, animationDuration = 300, className }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      animationDuration={animationDuration}
    >
      <div 
        className={`absolute top-[80px] right-[150px] min-w-[300px] rounded-xl bg-white px-4 py-6 cursor-default transition-all duration-[${animationDuration}ms] ${className}`} 
        onClick={(e) => {e.stopPropagation()}}>
          <LogInForm />
      </div>
    </Modal>
  )
}

export default LogInModal