import React from 'react';
import Heading from '../../ui/text/Heading';
import EventCard from '../conference-selection/EventCard';
import SmallEventCard from '../conference-selection/SmallEventCard';

function PartyInquiryDrawerContent({ selectedHotel, selectedParty, onPartyClick, hotels }) {
 
  const renderParties = () => {
    return selectedHotel?.parties?.map((party, index) => {
      return (
        <EventCard
          key={index}
          event={party}
          shortDescription={party.shortDescription}
          isSelected={selectedParty === party}
          onClick={() => onPartyClick(party)}
        />
      );
    }); 
  };

  const allParties = hotels.reduce((acc, hotel) => {
    return acc.concat(hotel.parties || []);
  }, []);

  const otherParties = () => {
    return allParties
      .filter(party => party !== selectedParty)
      .map((party, index) => {
        return (
          <SmallEventCard
            key={index}
            event={party}
            shortDescription={party.shortDescription}
            isSelected={selectedParty === party}
            onClick={() => onPartyClick(party)}
          />
        );
      });
  };

  return (
    <>
      <Heading>Your choice</Heading>
      <div className='flex flex-col gap-6 pt-8 pb-5'>
        {renderParties()}
        <div className='grid grid-cols-2 gap-4 pt-8 pb-5'>
          {otherParties()}
        </div>
      </div>
    </>
  );
}

export default PartyInquiryDrawerContent;
