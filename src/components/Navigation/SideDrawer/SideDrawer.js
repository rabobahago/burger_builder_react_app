import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import './SideDrawer.css'
const SideDrawer = (props) => {
  return (
    <div className="SideDrawer">
      <div className="LogoClass">
        <Logo />
      </div>

      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
}
export default SideDrawer
