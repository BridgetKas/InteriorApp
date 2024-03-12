import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

const menu = [
    { path: '/', label: "Home" },
    { path: '/about', label: "About us" },
    { path: '/blog', label: "Blog" },
    { path: '/cart', label: "Cart" },
    { path: '/services', label: "Services" },
    { path: '/shop', label: "Shop" },
    { path: '/cart', label: "Cart" },
    { path: '/contact', label: "Contact us" },
]

function NavBar() {
  return (
    <div>
        {menu.map(item => <NavLink to={item.path} className="menuItem">{item.label}</NavLink>)}
    </div>
  )
}

export default NavBar