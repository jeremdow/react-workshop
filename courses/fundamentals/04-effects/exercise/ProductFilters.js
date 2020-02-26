import React, { useState, useEffect } from 'react'
import ProductFilterList from 'YesterTech/ProductFilterList'
import { getCategories } from './utils'

function ProductFilters() {
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  if (!categories) return <div>Loading Filters...</div>

  return (
    <div className="spacing">
      <ProductFilterList
        list={categories}
        urlKey="categories"
        label="Categories"
      />
    </div>
  )
}

export default ProductFilters
