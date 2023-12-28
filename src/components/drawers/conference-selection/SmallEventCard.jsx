import React from 'react';
import STitle from '../../ui/text/STitle';
import RoomDescription from '../../ui/RoomDescription';
import Image from 'next/image';
import SmallFloaterBlack from '../../ui/SmallFloaterBlack';

function SmallEventCard({ onClick, isSelected, event }) { 
  const cardClassName = isSelected ? 'border-slate-800' : 'border-slate-200';

  const formattedDescription = event.shortDescription.split('\n').map((line, index) => (
    <p key={index} className="m-0">{line}</p>
  ));

  return (
    <div className={`border rounded-lg overflow-hidden hover:border-slate-400 ${cardClassName}`} style={{ width: '380px', height: '360px' }}>
      <button
        type="button"
        onClick={onClick} 
        className="flex flex-col w-full h-full"
      >
        <div className="relative w-full h-60">
          <Image
            src={event.image}
            layout="fill"
            alt={`${event.type} room`} 
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col justify-between p-4 flex-grow">
          <STitle textColor="black" className="mb-2 self-start">{event.type}</STitle>
          <div className="flex-grow self-start">
            <RoomDescription>{formattedDescription}</RoomDescription>
          </div>
          <div className='flex justify-between items-center'> 
            <div className="flex-grow"></div>
            <SmallFloaterBlack>{'Læs mere'}</SmallFloaterBlack>
          </div>
        </div>
      </button>
    </div>
  );
}

export default SmallEventCard;
