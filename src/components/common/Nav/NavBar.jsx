import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./NavBar.module.css"
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
    <div className={styles.mainContainer}>
        <div className={styles.logoText}>Dream</div>
        <div className={styles.menuContainer}>
          <div className={styles.menu}>
            {menu.map(item => <NavLink to={item.path} key={item.path} className={styles.menuItem}>{item.label}</NavLink>)}
          </div>
          <div className={styles.cartContainer}>
            <MdPersonOutline size={30} color={colors.whiteGradient}/>
            <NavLink to="/cart"><PiShoppingCartSimple size={30}/></NavLink>
          </div>
        </div>
    </div>
  )
}

export default NavBar