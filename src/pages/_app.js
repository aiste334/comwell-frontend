/* eslint-disable jsx-a11y/alt-text */
import { SessionProvider } from 'next-auth/react';
import Header from "@/src/components/header/Header";
import "@/src/styles/globals.css";
import "@/src/styles/datepicker.css";
import SearchCard from "../components/hero/SearchCard";
import SuggestionGroup from "../components/suggestions/SuggestionGroup";
import localFont from 'next/font/local';
import OfferSection from "../components/caroussel/OfferSection";
import SidePadding from "../components/ui/side-padding/SidePadding";
import Footer from "../components/footer/Footer";


const fellixFont = localFont({
  variable: '--font-fellix',
  src: '../../public/fonts/Fellix-Regular.woff2',
});



export default function App({ Component, pageProps }) {
  return (
      <main className={`relative ${fellixFont.className}`} id="root-main">
            <SessionProvider session={pageProps.session}>
        <Header />
        <div className="w-full bg-hero bg-cover h-full" alt="hero">
          <div className="pl-20 pt-28 pb-20">
            <SearchCard />
          </div>
        </div>
        <div className="max-w-screen py-20 grid gap-20">
          <SidePadding>
            <SuggestionGroup />
          </SidePadding>
          <OfferSection />
        </div>
        <Footer></Footer>
        </SessionProvider>

      </main>
  );
}
