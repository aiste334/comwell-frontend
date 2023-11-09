import PlusSvg from '@/public/icons/action-circles/plus.svg'

const PlusButton = ({ className, disabled, onClick, ...otherProps }) => {

  const disabledSnippet = disabled ? "opacity-50" : "cursor-pointer"

  return (
    <div {...otherProps} onClick={disabled ? null : onClick} className={`${disabledSnippet} rounded-full w-8 h-8 bg-cw-gray-200 flex items-center ${className}`} >
      <PlusSvg className="mx-auto w-4 h-4"/>
    </div>
  )
}

export default PlusButton