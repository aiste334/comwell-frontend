import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Title from '../ui/text/Title';
import Input from '../ui/inputs/Input';

function GuestInfoContent({ setFullName, setEmail, setPhoneNumber }) {
  const { data: session } = useSession();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (session) {
      setFullName(session.user.name || '');
      setEmail(session.user.email || '');
      setPhoneNumber(session.user.phoneNumber || '');
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [session, setFullName, setEmail, setPhoneNumber]);

  return (
    <>
      <Title>Gæsteinformation</Title>
      <div className='flex flex-col gap-2 pr-5 pb-10 mb-10 border-b-[1px]'>
        <Input label="Fulde navn" value={loggedIn ? session.user.name || '' : ''} onChange={(e) => setFullName(e.target.value)} />
        <Input label="Email" value={loggedIn ? session.user.email || '' : ''} onChange={(e) => setEmail(e.target.value)} />
        <Input
          label="Telefon"
          type='text'
          value={loggedIn ? session.user.phoneNumber || '' : ''}
          placeholder='+45'
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input label="Tilføj adresse nu og spar tid ved check-in." />

        {/* Conditional rendering for Continue button and error message */}
        {!loggedIn && (
          <div className="text-red-500 mt-2">You need to be logged in to continue.</div>
        )}
        
      </div>
    </>
  );
}

export default GuestInfoContent;
