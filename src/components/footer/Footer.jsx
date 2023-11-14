import React from 'react';
import LogoSvg from "@/public/logos/logo.svg"
import Image from "next/image";
import Link from "next/link";
import HeaderButton from '../header/HeaderButton';
import FbIcon from "@/public/icons/facebook.svg"
import IgIcon from "@/public/icons/instagram.svg"
import LinkedinIcon from "@/public/icons/linkedin.svg"
import DkFlag from "@/public/icons/danishflag.svg"
import DropdownIcon from "@/public/icons/dropdown.svg"
import FooterMenuLink from './FooterMenuLink';
import FooterSmallMenuLink from './FooterSmallMenuLink';

function Footer() {
  return (
    <div className=" bottom-0 w-full">
      <div className="bg-sea-80 text-white px-12 py-4 h-[600px]">
        <div className="flex items-start justify-center h-full">
          <div className="w-1/4 px-[20px]">
            <FooterMenuLink>Tilbud</FooterMenuLink>
            <FooterMenuLink>Møde & Konference</FooterMenuLink>
            <FooterMenuLink>Restaurant & Fest</FooterMenuLink>
            <FooterMenuLink>Spa</FooterMenuLink>
            <FooterMenuLink>Kontakt</FooterMenuLink>
            <FooterMenuLink>Comwell Club</FooterMenuLink>
            <FooterMenuLink>Gavekort</FooterMenuLink>
            <FooterMenuLink>Firmaaftale</FooterMenuLink>
            <FooterMenuLink>Nyheder</FooterMenuLink>
          </div>

          <div className="w-3/4 flex flex-row px-[20px]">
            <div className="px-[150px]">
              <h3 className="text-[11px] font-bold uppercase leading-[25px]">kontakt</h3>
              <FooterSmallMenuLink>Comwells afdelinger</FooterSmallMenuLink>
              <FooterSmallMenuLink>Comwells hoteller</FooterSmallMenuLink>
            </div>
            <div className="">
              <h3 className="text-[11px] font-bold uppercase leading-[25px]">book</h3>
              <FooterSmallMenuLink>Overnatning</FooterSmallMenuLink>
              <a href="tel:+4570717871" className="text-[11px] leading-[25px]  hover:underline">
                (+45) 70 71 78 71 tryk 2  <br></br>
              </a>
              <a href="mailto:20booking@comwell.com" className="text-[11px] leading-[25px]  hover:underline">
                20booking@comwell.com
              </a>
              <FooterSmallMenuLink>Konference</FooterSmallMenuLink>
              <a href="tel:+4570717871" className="text-[11px] leading-[25px]  hover:underline">
                (+45) 70 71 78 71 tryk 1<br></br>
              </a>
              <a href="mailto:20konference@comwell.com" className="text-[11px] leading-[25px]  hover:underline">
                20konference@comwell.com
              </a>
            </div>

            <div className="px-[250px]">
              <h3 className="text-[11px] font-bold uppercase leading-[25px]">links</h3>
              <FooterSmallMenuLink>Nyheder & presse</FooterSmallMenuLink>
              <FooterSmallMenuLink>Job & karriere</FooterSmallMenuLink>
              <FooterSmallMenuLink>Handelsbetingelser</FooterSmallMenuLink>
              <FooterSmallMenuLink>Annulleringsbetingelser</FooterSmallMenuLink>
              <FooterSmallMenuLink>Persondatapolik</FooterSmallMenuLink>
              <FooterSmallMenuLink>Smileyordning</FooterSmallMenuLink>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[68px] flex items-center px-12 justify-between bg-sea-100">
        <Link href="/">
          <LogoSvg></LogoSvg>
        </Link>
        <div className="flex gap-6">
          <HeaderButton onClick={() => window.open('https://www.facebook.com/comwellhotels', '_blank')}> Facebook <FbIcon/></HeaderButton>
          <HeaderButton onClick={() => window.open('https://www.linkedin.com/company/comwellhotels', '_blank')}> LinkedIn <LinkedinIcon/></HeaderButton>
          <HeaderButton onClick={() => window.open('https://www.instagram.com/comwellhotels', '_blank')}> Instagram <IgIcon/></HeaderButton>
        </div>
        <div>
        <HeaderButton onClick={() => window.open('https://www.instagram.com/comwellhotels', '_blank')}> <DkFlag/>Dansk <DropdownIcon/></HeaderButton>
        </div>
      </div>
    </div>
  );
}

export default Footer;
