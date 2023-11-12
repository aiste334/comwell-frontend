import React from 'react'

function STitle({ children, className, textColor }) {
  return (
    <h2 className={`text-xl text-${textColor} font-semibold ${className}`}>
      {children}
    </h2>
    )
}

export default STitle