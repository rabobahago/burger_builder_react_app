import React from 'react'
import './input.css'
const Input = (props) => {
  let inputElement = null
  switch (props.inputType) {
    case 'input':
      inputElement = <input {...props} className="InputElement" />
      break
    case 'textarea':
      inputElement = <textarea {...props} className="InputElement" />
      break
    default:
      inputElement = <input {...props} className="InputElement" />
  }
  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
    </div>
  )
}
export default Input
