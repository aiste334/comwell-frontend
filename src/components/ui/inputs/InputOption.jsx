import React from 'react'

const InputOption = ({ value, children, ...otherProps}) => {
  return (
    <option value={value} {...otherProps}>{children}</option>
  )
}

export default InputOption