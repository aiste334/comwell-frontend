import BackArrowSvg from '@/public/icons/action-circles/backarrow.svg'

import RoundButton from './CircleButton'

const BackArrowButton = (props) => {
  return <RoundButton {...props} Icon={BackArrowSvg}/>
}

export default BackArrowButton