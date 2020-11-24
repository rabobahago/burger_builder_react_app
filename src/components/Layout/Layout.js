import React from 'react'
import Aux from '../../hoc/Ax'
import './Layout.css'
import ToolBar from '../Navigation/Toolbar/Toolbar.js'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js'
const Layout = (props) => (
  <Aux>
    <ToolBar />
    <SideDrawer />
    <main className="ContentLayout">{props.children}</main>
  </Aux>
)
export default Layout
