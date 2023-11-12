import React from 'react'

function SuiteDrawerHeaderInfo({ Icon, text }) {
  return (
    <>
        <span className='border-r border-cw-gray-300 last:border-r-0 px-4 gap-2 flex items-center'>
            <Icon className='h-[15px] w-[15px]'/>
            {text}
        </span>
    </>
  )
}

export default SuiteDrawerHeaderInfo