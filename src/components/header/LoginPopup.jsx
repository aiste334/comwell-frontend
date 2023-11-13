import Link from 'next/link';
import React, { useState } from 'react';

function LoginPopup({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="absolute top-[78px] right-20 flex items-center justify-center z-10">
      <div className="w-64 bg-white p-6 rounded-lg shadow-lg">
        <form onSubmit={handleLogin} >
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded placeholder-black font-medium"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded placeholder-black font-medium"
              placeholder="Adgangskode"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p className="text-xs text-light-grey-font leading-4">Har du glemt din adgangskode?</p>
          <Link href="/">
            <a className="text-xs text-button-dark leading-4 underline">Nulstil adgangskode</a>
          </Link>
          <p className="text-xs text-light-grey-font leading-4">Har du ikke en profil?</p>
          <Link href="/">
            <a className="text-xs text-button-dark leading-4 underline">Tilmeld dig Comwell Club</a>
          </Link>
          <hr className="border-t border-gray-300 my-4 w-full" />
          <div className='text-center'>
          <button
            type="submit"
            className="bg-button-dark text-white rounded-full h-[42px] px-10 font-semibold text-[16px]"
          >
            Log ind
          </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default LoginPopup;
