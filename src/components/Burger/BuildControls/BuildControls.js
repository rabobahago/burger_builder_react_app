import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css'
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]
const BuildControls = (props) => {
  return (
    <div className="BuildControlsBurger">
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
          />
        )
      })}
    </div>
  )
}
export default BuildControls
