/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react"
import LogoSvg from "@/public/logos/logo.svg"
import Link from "next/link"
import HeaderButton from "./HeaderButton"
import dropdownIcon from "@/public/icons/dropdown.svg"
import profileIcon from "@/public/icons/profile.svg"
import menuIcon from "@/public/icons/menu.svg"
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import HotelDrawerContent from "../drawers/HotelDrawerContent"

const Header = ({ }) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    function displayHotels(){
        setIsDrawerOpen(true)
    }


    function closeDrawer() {
        setIsDrawerOpen(false);
    }

    return (
        <>
            <div className={"sticky z-20 top-0 w-full h-[68px] flex items-center px-12 justify-between bg-black"}>
                <Link href="/">
                    <LogoSvg/>
                </Link>
                <div className="flex gap-6">
                    <HeaderButton onClick={displayHotels} >Lokationer <DropdownIcon/></HeaderButton>
                    <HeaderButton onClick={() => {}} >Profil <ProfileIcon/></HeaderButton>
                    <HeaderButton onClick={() => {}} >Menu <MenuIcon/></HeaderButton>
                </div>
            </div>
            <Drawer
            open={isDrawerOpen}
            onClose={closeDrawer}
            direction='right'
            size='300px'>
             <HotelDrawerContent closeDrawer={closeDrawer} />
            </Drawer>
        </>
    )
}

export default Header