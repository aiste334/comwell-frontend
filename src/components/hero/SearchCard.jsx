import Heading from '@/src/components/ui/Heading'
import TabGroup from '@/src/components/ui/tabs/TabGroup'
import Tab from '@/src/components/ui/tabs/Tab'
import Select from '@/src/components/ui/select/Select'
import DoubleSelect from '@/src/components/ui/select/DoubleSelect'
import PrimaryButton from '@/src/components/ui/buttons/PrimaryButton'
import SearchSvg from '@/public/icons/search.svg'
import SideDrawer from '../side-drawer/SideDrawer'
import { useState } from 'react'

const SearchCard = ({ className }) => {

  const [drawer, setDrawer] = useState()

  return (
    <>
    <div className={'bg-white rounded-2xl w-[530px] p-8 drop-shadow-lg ' + className}>
      <Heading>Book mødelokale på Copenhagen Portside</Heading>
      <TabGroup className="py-2">
        <Tab title="Overnatning" className="flex flex-col gap-3">
          <Select title="Hotel" onClick={() => {setDrawer('hotel')}}>Select hotel</Select>
          <Select title="Rooms" onClick={() => {setDrawer('rooms')}}>1 Room, 1 Person</Select>
          <DoubleSelect titles={["Check-in", "Check-out"]} values={["Nov 6", "Nov 7"]} onClick={() => {setDrawer('dates')}}/>
          <PrimaryButton>
            Book
            <SearchSvg className="w-4 h-4"/>
          </PrimaryButton>
        </Tab>
        <Tab title="Møde & Konferencer">
        </Tab>
        <Tab title="Fest & Selskaber">
        </Tab>
      </TabGroup>

    </div>
    <SideDrawer isOpen={drawer === 'hotel'} onClose={() => setDrawer()}>
      <Heading>Hotels</Heading>
    </SideDrawer>
    <SideDrawer isOpen={drawer === 'rooms'} onClose={() => setDrawer()}>
      <Heading>Rooms</Heading>

    </SideDrawer>
    <SideDrawer isOpen={drawer === 'dates'} onClose={() => setDrawer()}>
      <Heading>Dates</Heading>

    </SideDrawer>
    </>
  )
}

export default SearchCard