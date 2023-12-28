import React from 'react';
import STitle from '../../ui/text/STitle';
import RoomDescription from '../../ui/RoomDescription';
import Image from 'next/image';
import SmallFloaterBlack from '../../ui/SmallFloaterBlack';

function EventCard({ onClick, isSelected, event }) { // Renamed to EventCard and props made generic
  const cardClassName = isSelected ? 'border-slate-800' : 'border-slate-200';

  const formattedDescription = event.shortDescription.split('\n').map((line, index) => (
    <p key={index}>{line}</p>
  ));

  return (
    <>
      <button
        type="button"
        onClick={onClick} // Renamed prop used here
        className={`rounded-lg input relative flex w-full flex-col overflow-hidden hover:border-slate-400 border lg:flex-row lg:items-stretch ${cardClassName}`}
      >
        <div className="relative h-[350px] w-full ">
          <div className="relative block h-full w-full bg-gray-200">
            <Image
              src={event.image}
              layout="fill"
              alt={`${event.type} room`} // Changed alt text to be neutral
              objectFit="cover" />
          </div>
        </div>
      </button>
      <div className="relative flex flex-col justify-between px-[8px] pt-4 pb-[10px] text-left flex-grow">
        <STitle textColor="black">{event.type}</STitle>
        <RoomDescription>{formattedDescription}</RoomDescription>
        <div className='flex justify-end'>
          <button>
          <SmallFloaterBlack>{'  Læs mere'}</SmallFloaterBlack>
        </button>
        </div>   
        <div className="relative border-t my-3 border-gray-200 bg-white"></div>
    </div>
    </>
  );
}

export default EventCard;
