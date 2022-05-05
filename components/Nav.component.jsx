import React from 'react'
import Link from 'next/link'
import { Cart } from "./"
import { useStateContext } from "../contexts/state.context"
import { AiOutlineShopping } from 'react-icons/ai'

function Nav() {
  const { showCart, setShowCart, cartTotalQty } = useStateContext()

  return (
    <div className="navbar-container">
      <p className='logo'>
        <Link href="/">Sanity Commerce</Link>
      </p>
      <button
        type='button'
        className='cart-icon'
        onClick={() => setShowCart(!showCart)}
      >
        <AiOutlineShopping />
        <span className='cart-item-qty'>{cartTotalQty}</span>
      </button>
      {
        showCart && <Cart />
      }
    </div>
  )
}

export default Nav