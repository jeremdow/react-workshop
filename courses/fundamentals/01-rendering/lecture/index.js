import React, { lazy } from 'react'
import ReactDOM from 'react-dom'
import { FaRegStar, FaStar } from 'react-icons/fa'
import 'YesterTech/styles/global-styles.scss'
import './styles.scss'

// React is:
// 1. Composable
// 2. Declarative

function Button({ children, onEnter }) {
  return (
    <button
      onKeyDown={e => {
        if (e.key === 'Enter') {
          onEnter()
        }
      }}
      className="render_button"
      style={{ fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {children}
    </button>
  )
}

let domElement = document.querySelector('#root')

ReactDOM.render(
  <div>
    <Button onEnter={() => console.log('Enter')}>
      <FaStar /> Tacos
    </Button>
    <Button>
      <FaRegStar /> Pizza
    </Button>
  </div>,
  domElement
)
