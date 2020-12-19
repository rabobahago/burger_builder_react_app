import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavigationItem.css'

const NavigationItem = (props) => {
  return (
    <li className="NavigationItem">
      <NavLink activeClassName="active" exact={props.exact} to={props.link}>
        {props.children}
      </NavLink>
    </li>
  )
}
export default NavigationItem
