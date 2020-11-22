import React from 'react'
import './Button.css'
const Button = (props) => (
  <div className="[Button, props.btnType].join(' ')" onClick={props.clicked}>
    {props.children}
  </div>
)
export default Button
