/* eslint-disable jsx-a11y/alt-text */
import Header from "@/src/components/header/Header"
import "@/src/styles/globals.css"
import SearchCard from "../components/hero/SearchCard"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="w-full bg-hero bg-cover h-screen relative" alt="hero">
        <SearchCard className="absolute left-20 top-28"/>
      </div>
    </>
  )
}
