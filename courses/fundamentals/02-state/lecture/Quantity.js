import React from 'react'
import ReactDOM from 'react-dom'
import { FaMinusCircle, FaPlusCircle, FaSatelliteDish } from 'react-icons/fa'
import 'YesterTech/Quantity.scss'
import { doc } from 'prettier'

const states = []
let callCount = -1

function useState(initialValue) {
  const id = ++callCount

  if (id < states.length) {
    return states[id]
  }

  function setValue(value) {
    states[id][0] = value
    console.log(states)
    renderPhonyHooks()
  }

  const tuple = [initialValue, setValue]
  states.push(tuple)
  return tuple
}

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

function renderPhonyHooks() {
  callCount = -1
  ReactDOM.render(
    <Quantity />,
    document.getElementById('root')
  )
}

renderPhonyHooks()