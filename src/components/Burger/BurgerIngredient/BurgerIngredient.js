import React, { Component } from 'react'
import './BurgerIngredient.css'
import PropTypes from 'prop-types'
class BurgerIngredient extends Component {
  render() {
    let ingredient = null
    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div className="BreadBottomBurger"></div>
        break
      case 'bread-top':
        ingredient = (
          <div className="BreadTopBurger">
            <div className="Seeds1Burger"></div>
            <div className="Seeds2Burger"></div>
          </div>
        )
        break
      case 'meat':
        ingredient = <div className="MeatBurger"></div>
        break
      case 'cheese':
        ingredient = <div className="CheeseBurger"></div>
        break
      case 'salad':
        ingredient = <div className="SaladBurger"></div>
        break
      case 'bacon':
        ingredient = <div className="BaconBurger"></div>
        break
      default:
        ingredient = null
    }
    return ingredient
  }
}
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
}
export default BurgerIngredient
