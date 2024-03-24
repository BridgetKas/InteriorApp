import React, { Fragment } from 'react'
import DesktopNav from './DesktopNav/DesktopNav';

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
    <Fragment>
      <DesktopNav menu={menu}/>
    </Fragment>   
    
  )
}

export default NavBar