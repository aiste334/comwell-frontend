import { useState } from "react"
import logoSvg from "@/public/logos/logo.svg"
import Image from "next/image"
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
            <div className={" w-full h-[68px] flex items-center px-12 justify-between bg-black"}>
                <Link href="/">
                    <Image src={logoSvg}/>
                </Link>
                <div className="flex gap-6">
                    <HeaderButton onClick={displayHotels} >Lokationer <Image src={dropdownIcon}/></HeaderButton>
                    <HeaderButton onClick={() => {}} >Profil <Image src={profileIcon}/></HeaderButton>
                    <HeaderButton onClick={() => {}} >Menu <Image src={menuIcon}/></HeaderButton>
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