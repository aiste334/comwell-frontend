import Header from '@/src/components/header/Header'
import '@/src/styles/globals.css'
import offersStuff from "@/public/dummy-backend/offers.json"

export default function App({ Component, pageProps }) {

  // const renderOffers = () => {
  //   return offersStuff.map(offerThing => {
  //     return <OfferCard
  //             info={offerThing}
  //           />
  //   })
  // }

  return (<>
    <Header name="Comgood"></Header>
    {/* {renderOffers()} */}
  </>)
}
