import React from 'react'

const PrimaryButton = ({children, disabled, ...otherProps}) => {
  return (
    <button {...otherProps} className={`rounded-full bg-active-black opacity-${disabled ? '50' : '100'} p-4 w-full text-white font-semibold flex gap-2 items-center justify-center`}>{children}</button>
  )
}

export default PrimaryButton