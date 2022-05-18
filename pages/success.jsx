import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'

import { useStateContext } from '../contexts/state.context'
import { runFireworks } from '../lib/utils'

function Success() {
  const { setCartItems, setCartTotalPrice, setCartTotalQty } = useStateContext()

  useEffect(() => {
    localStorage.clear()
    setCartItems(() => [])
    setCartTotalPrice(() => 0)
    setCartTotalQty(() => 0)
    runFireworks()
  }, [])

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thankyou for your order</h2>
        <p className="description">If you have any questions, please email
          <a className="email" href="mailto:orders@sanitystore.co.uk"> our help desk</a>
        </p>
        <Link href="/">
          <button className="btn" type="button" width="300px">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success