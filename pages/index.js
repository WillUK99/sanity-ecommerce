import React from 'react'

import {
  HeroBanner,
  Product,
  FooterBanner,
} from "../components"

import { client } from '../lib/client'

function Home({ products, bannerData }) {
  console.log(bannerData.product)
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div className='products-heading'>
        <h2>Best selling products</h2>
        <p>Speakers from a-z</p>
      </div>

      <div className='products-container'>
        {
          products?.map((product, i) => {
            return <Product key={i} product={product}/>
          })
        }
      </div>

      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`
  const products = await client.fetch(query)

  const bannerQuery = `*[_type == "banner"]`
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {
      products,
      bannerData,
    }
  }
}

export default Home
