import React from 'react'
import Link from 'next/link'
import { Cart } from "./"
import { useStateContext } from "../contexts/state.context"
import { AiOutlineShopping } from 'react-icons/ai'

function Nav() {
  const { isCartOpen, setIsCartOpen, cartQuantity } = useStateContext()

  return (
    <div class="navbar-container">
      <p className='logo'>
        <Link href="/">Sanity Commerce</Link>
      </p>
      <button
        type='button'
        className='cart-icon'
        onClick={() => setIsCartOpen(!isCartOpen)}
      >
        <AiOutlineShopping />
        <span className='cart-item-qty'>{cartQuantity}</span>
      </button>
      {
        isCartOpen && <Cart />
      }
    </div>
  )
}

export default Nav