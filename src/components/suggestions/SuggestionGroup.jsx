import React from 'react'
import Suggestion from './Suggestion'

function SuggestionGroup() {
  return (
    <div className=' flex w-full h-[400px] gap-5'>
        <Suggestion 
          width='w-1/3'
          image='/images/narrow1.webp' 
          floaterText='Se lokaler og mødepakker' 
          titleText='Lad os hjælpe dig med dit næste møde' 
          subtitle='Vi har lokalerne, den gode forplejning og professionel mødeplanlægning.'/>
        <Suggestion 
          width='w-2/3'
          image='/images/wide.jpg' 
          floaterText='Sæt kryds i kalenderen' 
          titleText='Julefest med mad og musik' 
          subtitle='Klar til årets firmajulefrokost? Se hotellernes juletilbud til jer.'/>       
    </div>
  )
}

export default SuggestionGroup