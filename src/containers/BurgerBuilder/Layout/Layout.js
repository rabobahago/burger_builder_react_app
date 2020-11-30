import React from 'react'
import Aux from '../../../hoc/Ax/Ax'
import './Layout.css'
import ToolBar from '../../../components/Navigation/Toolbar/Toolbar.js'
import SideDrawer from '../../../components/Navigation/SideDrawer/SideDrawer.js'
class Layout extends React.Component {
  state = {
    showSideDrawer: true,
  }
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      }
    })
  }
  render() {
    return (
      <Aux>
        <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler} />
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
