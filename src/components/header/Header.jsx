import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoSvg from '@/public/logos/logo.svg';
import dropdownIcon from '@/public/icons/dropdown.svg';
import profileIcon from '@/public/icons/profile.svg';
import menuIcon from '@/public/icons/menu.svg';
import HeaderButton from './HeaderButton';
import LoginPopup from './LoginPopup';

function Header() {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

  const toggleLoginPopup = () => {
    setLoginPopupOpen((prevIsLoginPopupOpen) => !prevIsLoginPopupOpen);
  };

  return (
    <div className="w-full h-[68px] flex items-center px-12 justify-between bg-black relative">
      <Link href="/">
        <Image src={logoSvg} />
      </Link>
      <div className="flex gap-6">
        <HeaderButton onClick={() => {}}>Lokationer <Image src={dropdownIcon} /></HeaderButton>
        <HeaderButton onClick={toggleLoginPopup}>Profil <Image src={profileIcon} /></HeaderButton>
        <HeaderButton onClick={() => {}}>Menu <Image src={menuIcon} /></HeaderButton>
      </div>

      <LoginPopup isOpen={isLoginPopupOpen} onClose={toggleLoginPopup} />
    </div>
  );
}

export default Header;
