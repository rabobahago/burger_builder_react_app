import React from 'react'
import './input.css'
const Input = (props) => {
  let inputElement = null
  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          className="InputElement"
        />
      )
      break
    case 'textarea':
      inputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          className="InputElement"
        />
      )
      break
    case 'select':
      inputElement = (
        <select value={props.value} className="InputElement">
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      )
      break
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          className="InputElement"
        />
      )
  }
  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
    </div>
  )
}
export default Input
