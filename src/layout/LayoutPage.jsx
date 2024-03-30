import React from 'react'
import NavBar from '../components/common/Nav/NavBar'
import { Outlet } from 'react-router-dom'
import FooterTab from './Footer/FooterTab'

function LayoutPage() {
  return (
    <div >
        <NavBar/>
        <Outlet/>
        <FooterTab/>
    </div>
  )
}

export default LayoutPage