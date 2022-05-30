import { useState } from "react"
import { Home } from "../../pages/home/Home"
import { About } from "../../pages/about/About"
import { Restaurants } from "../../pages/Restaurants/Restuarants"
import { Contact } from "../../pages/contact/Contact"
import Style from "./header.module.scss"
import Logo from "../../assets/images/logo.svg"
import { Nav } from "../nav/Nav"


export const Header = () => {


    return (
        <header className={Style.headercontainer}>
            <Nav/>
        </header> 

    )
}