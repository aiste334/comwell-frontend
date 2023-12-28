import React, { useState, useEffect } from 'react'
import Heading from '../../ui/text/Heading'
import EventCard from './EventCard';
import SmallEventCard from './SmallEventCard';

function ConferenceInquiryDrawerContent({ selectedHotel, selectedConference, onConferenceClick, hotels}) {

  const renderConferences = () => {
    return selectedHotel?.conferences?.map((conference, index) => (
      <EventCard
      key={index}
      event={conference}
      shortDescription={conference.shortDescription}
      isSelected={selectedConference === conference}
      onClick={() => onConferenceClick(conference)}
    />
    ));
  };

  const allConferences = hotels.reduce((acc, hotel) => {
    return acc.concat(hotel.conferences || []);
  }, []);

  const otherConferences = () => { return allConferences
    .filter(conference => conference !== selectedConference)
    .map((conference, index) => (
      <SmallEventCard
        key={index}
        event={conference}
        shortDescription={conference.shortDescription}
        isSelected={false}
        onClick={() => onConferenceClick(conference)}
      />
      ));
    };

  return (
    <>
      <Heading>Your choice</Heading>
      <div className='flex flex-col gap-6 pt-8 pb-5'>
          {renderConferences()}
          <div className='grid grid-cols-2 gap-4 pt-8 pb-5'>
            {otherConferences()}
          </div>
      </div>
    </>
  );
}

export default ConferenceInquiryDrawerContent;
