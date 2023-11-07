import React from 'react';
import logoSvg from "@/public/logos/logo.svg";
import Image from "next/image";
import Link from "next/link";
import HeaderButton from '../header/HeaderButton';
import fbIcon from "@/public/icons/facebook.svg";
import linkedinIcon from "@/public/icons/linkedin.svg";
import igIcon from "@/public/icons/instagram.svg";
import dkFlag from "@/public/icons/danishflag.svg";
import dropdownIcon from "@/public/icons/dropdown.svg";
import FooterMenuLink from './FooterMenuLink';
import FooterSmallMenuLink from './FooterSmallMenuLink';

function Footer() {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="bg-footer-gray text-white px-12 py-4 h-[600px]">
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
      <div className="h-[68px] flex items-center px-12 justify-between bg-footer-dark">
        <Link href="/">
          <Image src={logoSvg} />
        </Link>
        <div className="flex gap-6">
          <HeaderButton onClick={() => window.open('https://www.facebook.com/comwellhotels', '_blank')}>
            <Image src={fbIcon} /> Facebook
          </HeaderButton>
          <HeaderButton onClick={() => window.open('https://www.linkedin.com/company/comwellhotels', '_blank')}>
            <Image src={linkedinIcon} /> LinkedIn
          </HeaderButton>
          <HeaderButton onClick={() => window.open('https://www.instagram.com/comwellhotels', '_blank')}>
            <Image src={igIcon} /> Instagram
          </HeaderButton>
        </div>
        <div>
          <HeaderButton className="text-[16px]" onClick={() => {}}>
            <Image src={dkFlag} /> Dansk
            <Image src={dropdownIcon} />
          </HeaderButton>
        </div>
      </div>
    </div>
  );
}

export default Footer;
