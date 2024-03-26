import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
import { MdPersonOutline } from "react-icons/md";
import { PiShoppingCartSimple } from "react-icons/pi";
import styles from "./NavBar.module.css"
import { colors } from '../../../utils/colors';

export default function MobileNav({menu}) {
  const [isOpen,setisOpen] = useState(false)
   const menuClicked = () => {
    setisOpen(!isOpen)
   }

  return (
    <div className={styles.mobileContainer}>
        <GiHamburgerMenu size={30} color={colors.whiteGradient} onClick={menuClicked}/> 
        <div className={`${styles.mobileDropdown} ${isOpen ? styles.open : ''}`}>
          <div className={styles.menuNav}>
            {menu.map(item => <NavLink to={item.path} key={item.path} className={styles.menuItem}>{item.label}</NavLink>)}
          </div>
          <div className={styles.mobileCartContainer}>
            <MdPersonOutline size={30} color={colors.whiteGradient}/>
            <NavLink to="/cart"><PiShoppingCartSimple size={30}/></NavLink>
          </div>
        </div>
    </div>

  )
}
