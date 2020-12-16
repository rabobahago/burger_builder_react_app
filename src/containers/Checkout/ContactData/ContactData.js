import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import './ContactData.css'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  }
  render() {
    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        <form>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <input
            className="input"
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className="input"
            type="text"
            name="postal"
            placeholder="Your Postal"
          />
          <Button btnType="Success">Order</Button>
        </form>
      </div>
    )
  }
}
export default ContactData
