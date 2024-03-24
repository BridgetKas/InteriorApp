import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./NavBar.module.css"
import { colors } from '../../../utils/colors';

export default function MobileNav() {
  return (
    <div className={styles.mobileContainer}>
        <GiHamburgerMenu size={30} color={colors.whiteGradient}/> 
    </div>

  )
}
