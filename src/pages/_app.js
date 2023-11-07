/* eslint-disable jsx-a11y/alt-text */
import Header from "@/src/components/header/Header"
import "@/src/styles/globals.css"
import SearchCard from "../components/hero/SearchCard"

export default function App({ }) {
  return (
    <main className="relative" id="root-main">
      <Header />
      <div className="w-full bg-hero bg-cover h-screen" alt="hero">
        <div className="pl-20 pt-28">
          <SearchCard/>
        </div>
      </div>
    </main>
  )
}
