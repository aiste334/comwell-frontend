/* eslint-disable jsx-a11y/alt-text */
import Header from "@/src/components/header/Header"
import "@/src/styles/globals.css"
import "@/src/styles/datepicker.css"
import SearchCard from "../components/hero/SearchCard"
import SuggestionGroup from "../components/suggestions/SuggestionGroup"
import localFont from 'next/font/local'
import Footer from "../components/footer/Footer"

const fellixFont = localFont({ 
  variable: '--font-fellix',
  src: '../../public/fonts/Fellix-Regular.woff2',
})

export default function App() {
  return (
    <main className={`relative ${fellixFont.className}`} id="root-main">
      <Header />
      <div className="w-full bg-hero bg-cover h-screen" alt="hero">
        <div className="pl-20 pt-28">
          <SearchCard/>
        </div>
      </div>
      <div className="px-20 py-20">
        <SuggestionGroup />
      </div>
      <Footer></Footer>
    </main>
  )
}
