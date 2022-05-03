import React, { useContext, createContext, useState, useEffect } from 'react'

import { toast } from 'react-hot-toast'

/**
 * Increment the quantity of the product
 * Decrement the quantity of the product
 * function to add qty of items to cart when add to basket it clicked 
 */

const addToCart = (cartItems, productToAdd, quantity) => {
  const isExistingItem = cartItems.find((cartItem) => cartItem._id === productToAdd._id)

  if (isExistingItem) {
    return cartItems.map((cartItem) =>
      cartItem._id === productToAdd._id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const StateContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  increaseQty: () => { },
  decreaseQty: () => { },
  removeItemInCart: () => { },
  cartTotalPrice: 0,
  cartQuantity: 0,
  itemQuantity: 0,
})

export const StateProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartTotalPrice, setCartTotalPrice] = useState(0)
  const [cartQuantity, setCartQuantity] = useState(0)
  const [itemQuantity, setItemQuantity] = useState(0)

  useEffect(() => {
    setItemQuantity((prevState) => prevState - prevState)
  }, [cartItems])

  useEffect(() => {
    setCartTotalPrice(cartItems.reduce((a, c) => a + c.price * c.quantity, 0), toast.success(`Cart Total Price: £${cartTotalPrice}`))
  }, [cartItems])

  useEffect(() => {
    setCartQuantity(cartItems.reduce((a, c) => a + c.quantity, 0))
  }, [cartItems])

  const addItemToCart = (productToAdd, quantity) => {
    if (quantity === 0) {
      toast.error('Please select quantity')
      return
    }
    setCartItems(addToCart(cartItems, productToAdd, quantity))
  }

  const increaseQty = () => {
    setItemQuantity((prevState) => prevState + 1)
  }

  const decreaseQty = (product) => {
    if (itemQuantity <= 0) {
      toast.error(`${product} quantity cannot be less than 0`)
      return
    }
    setItemQuantity((prevState) => prevState - 1)
  }

  // Values to be passed to the context
  const value = {
    increaseQty,
    decreaseQty,
    itemQuantity,
    addItemToCart,
    cartQuantity,
    isCartOpen,
    setIsCartOpen,
  }

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)