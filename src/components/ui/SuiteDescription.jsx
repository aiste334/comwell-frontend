import React from 'react'

function SuiteDescription({ children }) {
  return (
    <p className='max-lg:hidden mb-4 line-clamp-2 max-h-[32px] lg:max-w-[60%] text-xs'>{children}</p>
    )
}

export default SuiteDescription