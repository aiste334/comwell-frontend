import React from 'react'

const PrimaryButton = ({children, ...otherProps}) => {
  return (
    <button {...otherProps} className="rounded-full bg-active-black p-4 w-full text-white font-semibold flex gap-2 items-center justify-center" >{children}</button>
  )
}

export default PrimaryButton