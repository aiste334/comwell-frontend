import Header from '@/src/components/header/Header'
import '@/src/styles/globals.css'
import offersStuff from "@/public/dummy-backend/offers.json"
import ServiceSection from '../components/services/ServiceSection'

export default function App({ Component, pageProps }) {

  /*const renderOffers = () => {
    return offersStuff.map(offerThing => {
      return <OfferCard
              info={offerThing}
            />
    })
  }
  
  this  belongs int the return
      {renderOffers()}*/

  return (<>
    <Header name="Comgood"></Header>
      <ServiceSection>
      </ServiceSection>
  </>)
}
