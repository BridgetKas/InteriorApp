import React from 'react'
import { NavLink } from 'react-router-dom'
import sytles from "./NavBar.module.css"
import { PiShoppingCartSimple } from "react-icons/pi";
import { MdPersonOutline } from "react-icons/md";
import { colors } from '../../../utils/colors';

const menu = [
    { path: '/', label: "Home" },
    { path: '/about', label: "About us" },
    { path: '/blog', label: "Blog" },
    { path: '/services', label: "Services" },
    { path: '/shop', label: "Shop" },
    { path: '/contact', label: "Contact us" },
]

function NavBar() {
  return (
    <div className={sytles.mainContainer}>
        <div className={sytles.logoText}>Dream</div>
        <div className={sytles.menuContainer}>
          <div className={sytles.menu}>
            {menu.map(item => <NavLink to={item.path} key={item.path} className="menuItem">{item.label}</NavLink>)}
          </div>
          <div className={sytles.menu}>
            <MdPersonOutline size={30} color={colors.whiteGradient}/>
            <NavLink to="/cart"><PiShoppingCartSimple size={30}/></NavLink>
          </div>
        </div>
    </div>
  )
}

export default NavBar