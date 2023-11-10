import CloseButton from '../ui/buttons/circle-buttons/CloseButton'
import SideDrawer from './SideDrawer'

const ShortSideDrawer = ({ children, className, onClose, ...otherProps }) => {
  return (
    <SideDrawer {...otherProps} onClose={onClose} className={`w-[400px] ${className}`}>
      {children}
      <CloseButton className="absolute top-7 right-4" onClick={onClose}/>
    </SideDrawer>
  )
}

export default ShortSideDrawer