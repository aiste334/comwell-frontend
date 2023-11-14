import React from 'react'

function SmallFloaterBlack({ children }) {
    return (
      <div className={`inline-block rounded-full bg-black text-white px-3 py-1.5 text-xs font-semibold`}>
        {children}
      </div>
    );
  }

export default SmallFloaterBlack