import React from 'react'
import PrimaryButton from './PrimaryButton'

const DrawerPrimaryButton = ({ children, ...otherProps }) => {
  return (
    <div className='sticky bottom-0 mt-auto border-t-cw-gray-300 border-t-[1px] px-4 py-6 -mx-4'>
      <PrimaryButton {...otherProps}>{children}</PrimaryButton>
    </div>
  )
}

export default DrawerPrimaryButton