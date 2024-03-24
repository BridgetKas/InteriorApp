import React from 'react'
import styles from "./NavBar.module.css"
import { NavLink } from 'react-router-dom'
import { PiShoppingCartSimple } from "react-icons/pi";
import { MdPersonOutline } from "react-icons/md";
import { colors } from '../../../utils/colors';

function DesktopNav({menu}) {
  return (
    <div className={styles.menuContainer}>
        <div className={styles.menu}>
          {menu.map(item => <NavLink to={item.path} key={item.path} className={styles.menuItem}>{item.label}</NavLink>)}
        </div>
        <div className={styles.cartContainer}>
          <MdPersonOutline size={30} color={colors.whiteGradient}/>
          <NavLink to="/cart"><PiShoppingCartSimple size={30}/></NavLink>
        </div>
    </div>
    
  )
}

export default DesktopNav