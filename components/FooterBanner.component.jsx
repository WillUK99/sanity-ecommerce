import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

function FooterBanner({ footerBanner }) {
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
  } = footerBanner

  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{bigText}</h3>
          <h3>{bigText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{description}</p>
          <Link href={`/products/${product.toLowerCase()}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img
          src={urlFor(image)}
          alt={product}
          className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner