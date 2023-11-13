import React from 'react';
import Service from './Service';

function ServiceSection({}) {

  return (
    <div className="bg-white w-full h-96 p-0 md:p-11 flex space-x-10">
    <Service
      width="md:w-1/3"
      label="Se lokaler og mødepakker"
      //image="/images/background-image-4.jpeg"
      title="Lad os hjælpe dig med dit næste møde"
      content="Vi har lokalerne, den gode forplejning og professionel mødeplanlægning"
    />
    <Service
      width="md:w-2/3"
      label="Sæt kryds i kalenderen"
      //image ="/images/background-image-3.jpeg"
      title="Julefest med mad og musik"
      content="Klar til årets firmajulefrokost? Se hotellernes juletilbud til jer"
    />
  </div>
  );
}

export default ServiceSection;
