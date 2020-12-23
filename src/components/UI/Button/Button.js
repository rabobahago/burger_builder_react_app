import React from 'react'
import './Button.css'
const Button = (props) => (
  <div
    className="[Button, props.btnType].join(' ')"
    onClick={props.clicked}
    style={{
      display: 'inline',
      marginRight: '40px',
      color: '#5c9210',
      cursor: 'pointer',
    }}
  >
    {props.children}
  </div>
)
export default Button
