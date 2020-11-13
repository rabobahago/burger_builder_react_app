import React, { Component } from 'react'
import Aux from '../../hoc/Ax'
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Building Controls</div>
      </Aux>
    )
  }
}
export default BurgerBuilder
