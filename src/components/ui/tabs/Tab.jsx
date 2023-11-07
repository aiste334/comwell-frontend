import React from 'react'

const Tab = ({ title, active, children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Tab