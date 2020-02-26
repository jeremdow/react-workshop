import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PrimaryLayout from './PrimaryLayout'
import { ShoppingCartProvider } from './ShoppingCartState'
import 'YesterTech/styles/global-styles.scss'

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <PrimaryLayout />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
