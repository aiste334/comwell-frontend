/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react"
import LogoSvg from "@/public/logos/logo.svg"
import Link from "next/link"
import HeaderButton from "./HeaderButton"
import DropdownIcon from "@/public/icons/dropdown.svg"
import ProfileIcon from "@/public/icons/profile.svg"
import MenuIcon from "@/public/icons/menu.svg"

const Header = () => {

    return (
        <div className={"sticky z-20 top-0 w-full h-[68px] flex items-center px-12 justify-between bg-black"}>
            <Link href="/">
                <LogoSvg/>
            </Link>
            <div className="flex gap-6">
                <HeaderButton onClick={() => {}} >Lokationer <DropdownIcon/></HeaderButton>
                <HeaderButton onClick={() => {}} >Profil <ProfileIcon/></HeaderButton>
                <HeaderButton onClick={() => {}} >Menu <MenuIcon/></HeaderButton>
            </div>
        </div>
    )
}

export default Header