import React, { useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import 'YesterTech/Quantity.scss'

export default function Quantity() {
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState(null)

  function subtract() {
    if (quantity > 0) setQuantity(quantity - 1)
    else setError('NO ')
  }

  function add() {
    setQuantity(quantity + 1)
    setError()
  }

  return (
    <div className="quantity-picker">
      <div>
        <div>
          <button type="button" className="icon-button" onClick={subtract}>
            <FaMinusCircle />
          </button>
        </div>
        <div className="input-container">{quantity}</div>
        <div>
          <button type="button" className="icon-button" onClick={add}>
            <FaPlusCircle />
          </button>
        </div>
      </div>
      {error && <span style={{ color: 'red', fontSize: 17 }}>{error}</span>}
    </div>
  )
}
