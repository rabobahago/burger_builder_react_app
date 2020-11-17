import React from 'react'
import './BuildControl.css'
const BuildControl = (props) => {
  return (
    <div className="BuildControlBurger">
      <div className="LabelBurger">{props.label}</div>
      <div className="LessBurger" onClick={props.removed}>
        Less
      </div>
      <div className="MoreBurger" onClick={props.added}>
        More
      </div>
    </div>
  )
}
export default BuildControl
