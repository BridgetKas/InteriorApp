import React from 'react'
import NavBar from '../components/common/Nav/NavBar'
import { Outlet } from 'react-router-dom'

function LayoutPage() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default LayoutPage