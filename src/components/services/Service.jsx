import React from 'react';
import Label from './Label';
import ContentTitle from './ContentTitle';
import ContentText from './ContentText';

function Service({ width, label, title, content }) {
  return (
    <div className={`w-full ${width} bg-center bg-cover text-white p-4 md:pl-11 md:pr-11 rounded-lg relative bg-pink-400 transition hover:bg-custom hover:duration-500`}>
        <Label text={title} backgroundColor="white" fontColor="black" />
        <div className="absolute left-[24px] bottom-[24px] text-white p-4 text-left">
        <ContentTitle text={title} color="white" />
        <ContentText text={content}  color="white" />
      </div>
    </div>
  );
}

export default Service;
