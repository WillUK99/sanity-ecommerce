import React from 'react'
import Link from 'next/link'

import { urlFor } from "../lib/client"

function Product({ product }) {
  const { images, name, slug, price } = product

  return (
    <div>
      <Link href={`/products/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(images && images[0])}
            width={250}
            height={250}
            className="product-image"
            alt={name} />
            <p className="product-name">{name}</p>
            <p className="product-price">£{price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product