import React from 'react'
import NarrowSuggestion from './NarrowSuggestion'
import WideSuggestion from './WideSuggestion'

function SuggestionGroup() {
  return (
    <div className=' flex w-full h-[400px] gap-5'>
        <NarrowSuggestion />
        <WideSuggestion />
       
    </div>
  )
}

export default SuggestionGroup