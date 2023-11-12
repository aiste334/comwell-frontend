import React from 'react'

function SmallFloater({text, children, className}) {
  return (
    <div className={`absolute top-[10px] left-[10px] rounded-full bg-white px-2.5 py-1.5 text-xs font-semibold ${className}`}>
        {text} 
        {children}
    </div>  
    )
}

export default SmallFloater