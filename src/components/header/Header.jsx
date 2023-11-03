import { useState } from "react"
import logoSvg from "@/public/logos/logo.svg"
import Image from "next/image"
import Link from "next/link"
import HeaderButton from "./HeaderButton"
import dropdownIcon from "@/public/icons/dropdown.svg"
import profileIcon from "@/public/icons/profile.svg"
import menuIcon from "@/public/icons/menu.svg"

const Header = ({ }) => {

    const [darkMode, setDarkMode] = useState()

    return (
        <div className={" w-full h-[68px] flex items-center px-12 justify-between bg-black"}>
            <Link href="/">
                <Image src={logoSvg}/>
            </Link>
            <div className="flex gap-6">
                <HeaderButton onClick={() => {}} >Lokationer <Image src={dropdownIcon}/></HeaderButton>
                <HeaderButton onClick={() => {}} >Profil <Image src={profileIcon}/></HeaderButton>
                <HeaderButton onClick={() => {}} >Menu <Image src={menuIcon}/></HeaderButton>
            </div>
        </div>
    )
}

export default Header