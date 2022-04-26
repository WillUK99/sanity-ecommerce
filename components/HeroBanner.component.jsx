import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

function HeroBanner({ heroBanner }) {
  const {
    smallText,
    midText,
    bigText,
    bigText2,
    buttonText,
    description,
    image,
    product,
    saleTime,
    discount,
  } = heroBanner

  return (
    <div className='hero-banner-container'>
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{bigText}</h1>
        <img src={urlFor(image)} alt="headphones" className='hero-banner-image' />
        <div>
          <Link href={`/products/${product.toLowerCase()}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner