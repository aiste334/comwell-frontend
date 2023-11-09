import React from 'react'

function NarrowDrawer({children}) {
  return (

    <div className='w-[360px] h-full bg-narrowsuggestion'>
        {children}
    </div>
  )
}

export default NarrowDrawer