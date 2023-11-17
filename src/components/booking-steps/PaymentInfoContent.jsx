import React from 'react';
import Input from '../ui/inputs/Input';
import MiniOverviewCard from '../overview/MiniOverviewCard';
import BuildingSvg from '@/public/icons/building.svg';
import CalendarSvg from '@/public/icons/calendar.svg';
import BustSvg from '@/public/icons/bust.svg';
import Title from '../ui/text/Title';
import CheckMarkSvg from '@/public/icons/action-circles/checkmark.svg';

function PaymentInfoContent({
  kommentar,
  setKommentar,
  selectedHotel,
  fuldenavn,
  startDateString,
  endDateString,
  isPaymentMethodSelected,
  setIsPaymentMethodSelected,
}) {
  const svgClassName = isPaymentMethodSelected ? 'visible' : 'invisible';

  return (
    <>
      <Title>Min booking</Title>
      <MiniOverviewCard title={selectedHotel.name} subtitle='Denmark' Icon={BuildingSvg} />
      <MiniOverviewCard title='Gæsteinfo' subtitle={fuldenavn} Icon={BustSvg} />
      <MiniOverviewCard title='Dato' subtitle={`${startDateString}-${endDateString}`} Icon={CalendarSvg} />

      <div className='flex flex-col py-3 gap-y-2'>
        <Title>Evt. kommentar</Title>
        <Input label='Evt. kommentar...' value={kommentar} onChange={(e) => setKommentar(e.target.value)} />
      </div>

      <div className='flex flex-col py-3 gap-y-2'>
        <Title>Betalingsbetingelser</Title>
        <ul className='text-xs text-slate-600'>
          <li>- For at garantere din reservation beder vi dig om dine kreditkortoplysninger</li>
          <li>- Ved bestilling reserverer vi op til kr. 500,- på dit kort</li>
          <li>- Du vil kun blive opkrævet, hvis du ikke møder op på hotellet</li>
          <li>- Du vil ikke blive opkrævet, medmindre andet er angivet. Du betaler dit ophold på hotellet</li>
        </ul>
      </div>

      <div className='flex flex-col py-3 gap-y-2'>
        <Title>Betalingsmetode</Title>
        <button
          className='flex flex-row h-[56px] min-w-[100px] items-center justify-between w-full rounded-md border-[1px] font-semibold border-cw-gray-300 hover:border-gray-400 px-3 py-2'
          onClick={() => setIsPaymentMethodSelected(true)}
        >
          Pay during check-in
          <div className={`flex h-[24px] w-[24px] rounded-full bg-black text-white !border-0 ${svgClassName}`}>
            <CheckMarkSvg />
          </div>
        </button>
      </div>
    </>
  );
}

export default PaymentInfoContent;
