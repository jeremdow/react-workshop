import React, { useState } from 'react'
import Quantity from './Quantity'
//import { useShoppingCart } from './ShoppingCartState'
import ProductImage from 'YesterTech/ProductImage'

function BrowseProductItem({ productId, name, price, imagePath }) {
  const [quantity, setQuantity] = useState(0)

  return (
    <div className="browse-product-item">
      <ProductImage src={imagePath} size={7} alt={name} />
      <div>{name}</div>
      <div className="spacing-small">
        <button className="button" onClick={() => setQuantity(1)}>
          Add To Cart
        </button>
        {quantity > 0 && (
          <div className="align-right">
            <Quantity quantity={quantity} setQuantity={setQuantity} />
          </div>
        )}
      </div>
    </div>
  )
}

export default BrowseProductItem
