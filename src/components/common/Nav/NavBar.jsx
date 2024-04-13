import React, { Fragment } from 'react'
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import styles from "./NavBar.module.css"

const menu = [
    { path: '/', label: "Home" },
    { path: '/shop', label: "Shop" },
    { path: '/about', label: "About us" },
    { path: '/services', label: "Services" },
    { path: '/blog', label: "Blog" },
    { path: '/contact', label: "Contact us" },
]

function NavBar() {
  return (
    
      <div className={styles.mainContainer}>
        <div className={styles.logoText}>Dream</div>
        <div className={styles.container}>
          <DesktopNav menu={menu}/>
          <MobileNav menu={menu}/>
        </div>

      </div>
    
  )
}

export default NavBar