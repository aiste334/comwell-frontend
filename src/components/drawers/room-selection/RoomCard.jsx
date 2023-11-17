import React from 'react';
import Title from '../../ui/text/Title';
import STitle from '../../ui/text/STitle';
import RoomDescription from '../../ui/RoomDescription';
import CheckMarkSvg from '@/public/icons/action-circles/checkmark.svg';
import SmallFloater from '../../ui/SmallFloater';
import Image from 'next/image';

function RoomCard({ onRoomCardClick, isSelected, room }) {
  const cardClassName = isSelected ? 'border-slate-800' : 'border-slate-200';
  const svgClassName = isSelected ? 'visible' : 'invisible';

  return (
    <button
      type="button"
      onClick={onRoomCardClick}
      className={`rounded-lg input relative flex w-full flex-col overflow-hidden hover:border-slate-400 border lg:flex-row lg:items-stretch ${cardClassName}`}
    >
      <div className="relative h-[200px] w-full lg:h-[242px]">
        <div className="relative block h-full w-full overflow-hidden bg-gray-200">
          <Image src={room.image} width={400} height={400} alt="picture" />
        </div>
        <SmallFloater text={room.size} children={<sup> m2</sup>} />
      </div>
      <div className="relative flex w-full flex-col justify-between px-[8px] pt-4 pb-[10px] text-left">
        <STitle textColor="black">{room.type}</STitle>
        <RoomDescription>{room.description}</RoomDescription>
        <div className="h-1/3 w-1/2 rounded-lg bg-slate-100"></div>
        <Title>{room.price} kr.</Title>
      </div>
      <div className="flex flex-col md:flex-row md:items-center lg:max-w-[80%]">
        <div className={`absolute right-[12px] top-1/2 flex h-[24px] w-[24px] -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-black text-white !border-0 ${svgClassName}`}>
          <CheckMarkSvg />
        </div>
      </div>
    </button>
  );
}

export default RoomCard;
