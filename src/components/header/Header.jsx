/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react"
import LogoSvg from "@/public/logos/logo.svg"
import Link from "next/link"
import HeaderButton from "./HeaderButton"
import DropdownIcon from "@/public/icons/dropdown.svg"
import ProfileIcon from "@/public/icons/profile.svg"
import MenuIcon from "@/public/icons/menu.svg"
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import HotelDrawerContent from "../drawers/HotelDrawerContent"
import LogInModal from "../modals/log-in-modal/LogInModal"
import ShortSideDrawer from "../side-drawer/ShortSideDrawer"

const Header = ({ }) => {

    const [modal, setModal] = useState()

    return (
        <>
            <div className={"sticky z-20 top-0 w-full h-[68px] flex items-center px-12 justify-between bg-black"}>
                <Link href="/">
                    <LogoSvg/>
                </Link>
                <div className="flex gap-6">
                    <HeaderButton onClick={() => setModal('locations')} >Locations <DropdownIcon/></HeaderButton>
                    <HeaderButton onClick={() => setModal('login')}>
                        Profile <ProfileIcon/>
                        <LogInModal isOpen={modal === 'login'} onClose={() => setModal()}/>
                    </HeaderButton>
                    <HeaderButton onClick={() => {}} >Menu <MenuIcon/></HeaderButton>
                </div>
            </div>

            <ShortSideDrawer onClose={() => setModal()}>
                <HotelDrawerContent closeDrawer={() => setModal()} />
            </ShortSideDrawer>
        </>
    )
}

export default Header