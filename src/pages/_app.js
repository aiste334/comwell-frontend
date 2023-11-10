/* eslint-disable jsx-a11y/alt-text */
import Header from "@/src/components/header/Header"
import "@/src/styles/globals.css"
import "@/src/styles/datepicker.css"
import SearchCard from "../components/hero/SearchCard"
import localFont from 'next/font/local'

const fellixFont = localFont({ 
  variable: '--font-fellix',
  src: '../../public/fonts/Fellix-Regular.woff2',
})

export default function App() {
  return (
    <main className={`relative overflow-y-auto max-h-screen ${fellixFont.className}`} id="root-main">
      <Header />
      <div className="w-full bg-hero bg-cover h-screen" alt="hero">
        <div className="pl-20 pt-28">
          <SearchCard/>
        </div>
      </div>
    </main>
  )
}
