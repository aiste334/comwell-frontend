import React from 'react'

const Paragraph = ({ className, ...otherProps}) => {
  return (
    <p className={`text-sm text-cw-gray-600 ${className}`} {...otherProps}/>
  )
}

export default Paragraph