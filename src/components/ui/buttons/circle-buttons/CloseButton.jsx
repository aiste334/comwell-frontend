import CloseSvg from '@/public/icons/action-circles/close.svg'
import RoundButton from './CircleButton'

const CloseButton = (props) => {
  return <RoundButton {...props} Icon={CloseSvg}/>
}

export default CloseButton