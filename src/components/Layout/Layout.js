import React from 'react'
import Aux from '../../hoc/Ax'
import './Layout.css'
const Layout = (props) => (
  <Aux>
    <div>ToolBar, SideDrawer, Backdrop</div>

    <main className="ContentLayout">{props.children}</main>
  </Aux>
)
export default Layout
