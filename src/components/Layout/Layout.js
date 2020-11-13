import React from 'react'
import Aux from '../../hoc/Ax'
const Layout = (props) => (
  <Aux>
    <div>ToolBar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
)
export default Layout
