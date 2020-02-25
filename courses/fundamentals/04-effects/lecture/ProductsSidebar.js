import React, { useState, useEffect } from 'react'
import ProductFilters from 'YesterTech/ProductFilters'

function ProductsSidebar() {
  const query = '(min-width: 800px)'
  const [isWide, setIsWide] = useState(
    window.matchMedia(query).matches
  )

  useEffect(() => {
    let media = window.matchMedia(query)
    if (media.matches) {
      setIsWide(true)
    }

    let listener = event => setIsWide(event.matches)
    media.addListener(listener)

    return () => media.removeListener(listener)
  }, [query])

  return (
    isWide && (
      <aside>
        <ProductFilters />
      </aside>
    )
  )
}

export default ProductsSidebar
