import React from 'react'
import Aux from '../../hoc/Ax'
import './Layout.css'
import ToolBar from '../Navigation/Toolbar/Toolbar.js'
const Layout = (props) => (
  <Aux>
    <ToolBar />
    <main className="ContentLayout">{props.children}</main>
  </Aux>
)
export default Layout
