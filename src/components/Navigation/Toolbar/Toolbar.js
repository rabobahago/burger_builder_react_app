import React from 'react'
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
const Toolbar = (props) => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className="LogoC">
      <Logo />
    </div>

    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
)
export default Toolbar
