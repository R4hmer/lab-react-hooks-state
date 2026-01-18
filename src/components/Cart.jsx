import React from 'react'

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.length === 0
          ? <li>Cart is empty.</li>
          : cart.map((item, index) => <li key={index}>{item} is in your cart.</li>)}
      </ul>
    </div>
  )
}

export default Cart
