import React, { useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import 'YesterTech/Quantity.scss'

function Quantity() {
  const [quantity, setQuantity] = useState(1)

  function subtract() {
    setQuantity(quantity - 1)
  }

  function add() {
    setQuantity(quantity + 1)
  }

  function onChange(e) {
    const value = e.target.value
    if (value.match(/[0-9]+/))
      setQuantity(parseInt(value))
  }

  return (
    <div className="quantity-picker">
      <div>
        <div>
          <button type="button" className="icon-button" onClick={subtract}>
            <FaMinusCircle />
          </button>
        </div>
        <div className="input-container">
          <input
            type="text"
            aria-label="quantity"
<<<<<<< HEAD
            defaultValue={quantity}
=======
            value={quantity}
            onChange={onChange}
>>>>>>> 03-controlled-vs-uncontrolled > lecture
          />
        </div>
        <div>
          <button type="button" className="icon-button" onClick={add}>
            <FaPlusCircle />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Quantity
