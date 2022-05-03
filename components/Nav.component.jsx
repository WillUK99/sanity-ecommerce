import React from 'react'
import Link from 'next/link'

import { AiOutlineShopping } from 'react-icons/ai'

function Nav() {
  return (
    <div class="navbar-container">
      <p className='logo'>
        <Link href="/">Sanity Commerce</Link>
      </p>
      <button type='button' className='cart-icon' onClick={null}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>1</span>
      </button>
    </div>
  )
}

export default Nav