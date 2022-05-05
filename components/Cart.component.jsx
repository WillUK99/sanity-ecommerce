import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from "react-icons/ai"
import { TiDeleteOutline } from "react-icons/ti"
import { useStateContext } from '../contexts/state.context'
import { urlFor } from '../lib/client'

function Cart() {
  const cartRef = useRef()
  const {
    setShowCart,
    cartItems,
    cartTotalQty,
    cartTotalPrice,
    increaseItemInCart,
    decreaseItemInCart,
    removeItemInCart,
  } = useStateContext()

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className='cart-heading'
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({cartTotalQty} items)</span>
        </button>

        {
          cartItems.length < 1 && (
            <div className="empty-cart">
              <AiOutlineShopping size={150} />
              <h3>Your cart is empty</h3>
              <Link href="/">
                <button
                  type="button"
                  onClick={() => setShowCart(false)}
                  className="btn"
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          )
        }

        <div className="products-container">
          {
            cartItems.length >= 1 && cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img src={urlFor(item?.images[0])} alt={item.name} className='cart-product-image' />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>£{item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() => decreaseItemInCart(item)}
                        >
                          <AiOutlineMinus />
                        </span>
                        <span
                          className="num"
                          onClick=""
                        >
                          {item.qty}
                        </span>
                        <span
                          className="plus"
                          onClick={() => increaseItemInCart(item)}
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className='remove-item'
                      onClick={() => removeItemInCart(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        {
          cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total">
                <h3>Subtotal:</h3>
                <h3>£{cartTotalPrice}</h3>
              </div>
              <div className="btn-container">
                <button
                  type="button"
                  className='btn'
                // onClick={}
                >
                  Pay with stripe
                </button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Cart