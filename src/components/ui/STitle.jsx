import React from 'react'

function STitle({ children, className }) {
  return (
    <h2 className={`text-xl font-semibold ${className}`}>{children}</h2>
    )
}

export default STitle