import React from 'react'
import Aux from '../../hoc/Ax'
import './Layout.css'
import ToolBar from '../Navigation/Toolbar/Toolbar.js'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.js'
class Layout extends React.Component {
  state = {
    showSideDrawer: true,
  }
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }
  render() {
    return (
      <Aux>
        <ToolBar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className="ContentLayout">{this.props.children}</main>
      </Aux>
    )
  }
}
export default Layout
