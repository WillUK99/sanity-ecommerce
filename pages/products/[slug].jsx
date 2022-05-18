import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Product } from '../../components'
import { client, urlFor } from "../../lib/client"
import { useStateContext } from '../../contexts/state.context'

function ProductDetails({ product, allProducts }) {
  const [index, setIndex] = useState(0)

  const { images, name, description, price } = product
  const { increaseItemQty, decreaseItemQty, itemQty, addItemToCart, setShowCart } = useStateContext()

  const handleMouseEnter = (i) => {
    setIndex(i)
  }

  const handleBuyNow = () => {
    addItemToCart(product, itemQty)
    setShowCart(true)
  }
  
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(images && images[index])} className="product-detail-image"/>
          </div>
          <div className="small-images-container">
            {images?.map((image, i) => (
              <img 
              src={urlFor(image)}
              key={i}
              className={i == index ? "small-image selected-image" : "small-image"}
              onMouseEnter={() => handleMouseEnter(i)}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{description}</p>
          <p className="price">£{price}</p>
          <div className="quantity">
            <h3>Quantity</h3>
            <p className="quantity-desc">
              <span
                className="minus"
                onClick={() => decreaseItemQty()}
              >
                <AiOutlineMinus />
              </span>
              <span
                className="num"
              >
                {itemQty}
              </span>
              <span
                className="plus"
                onClick={() => increaseItemQty()}
              >
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className='add-to-cart'
              onClick={() => addItemToCart(product, itemQty)}
            >
              Add to cart
            </button>
            <button
              type="button"
              className='buy-now'
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {
              allProducts.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const productsQuery = `*[_type == "product"]{
    slug {
      current
    }
  }`
  const products = await client.fetch(productsQuery)

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }))

  return {
    paths,
    fallback: "blocking"
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params

  const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`
  const allProductsQuery = '*[_type == "product"]'

  const product = await client.fetch(productQuery)
  const allProducts = await client.fetch(allProductsQuery)

  return {
    props: {
      product,
      allProducts
    }
  }
}

export default ProductDetails