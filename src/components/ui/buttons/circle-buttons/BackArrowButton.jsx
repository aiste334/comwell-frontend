import BackArrowSvg from "@/public/icons/backarrow.svg"

const BackArrowButton = ({ className, onClick, ...otherProps }) => {

  return (
    <div {...otherProps} onClick={onClick} className={className} >
      <BackArrowSvg className='cursor-pointer'/>
    </div>
  )
}

export default BackArrowButton