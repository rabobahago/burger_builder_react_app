import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import './CheckoutSummary.css'

const CheckoutSummary = (props) => {
  return (
    <div className="CheckoutSummary">
      <h1 style={{ textAlign: 'center' }}>We hope it testes well!</h1>
      <div style={{ width: '100%', height: '300px', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked>
        CANCEL
      </Button>
      <Button btnType="Cancel" clicked>
        CONTINUE
      </Button>
    </div>
  )
}
export default CheckoutSummary
