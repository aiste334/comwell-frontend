import React from 'react'

function NarrowDrawer({children}) {
  return (

    <div className='w-[360px] h-full'>
        {children}
    </div>
  )
}

export default NarrowDrawer