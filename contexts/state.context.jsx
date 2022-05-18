import React, { useContext, createContext, useState, useEffect } from 'react'

import { toast } from 'react-hot-toast'

const emojiGen = () => {
  const emojies = ["💋", "👌", "😵‍💫", "❤️"]
  return emojies[Math.floor(Math.random() * emojies.length)]
}

/**
 * Given a cart items array and a product object, returns a new array
 * with product quantity = to that of the quantity passed or 1 if no quantity passed. 
 * @param {*} cartItems 
 * @param {*} product 
 * @param {*} qty 
 */
const addNewToCart = (cartItems, product, qty = 1) => {
  const itemExists = cartItems.find((item) => item._id === product._id)

  if (itemExists) {
    toast('Added to cart', {
      icon: emojiGen(),
    })
    return cartItems.map((cartItem) =>
      cartItem._id === product._id ? { ...cartItem, qty: cartItem.qty + qty } : cartItem
    )
  }

  toast('Added to cart', {
    icon: `${emojiGen()}`,
  })
  return [...cartItems, { ...product, qty: qty }]
}

/**
 * Given a cart items array and a product object, returns a new array
 * with product quantity decremented by 1. If product quantity is 1, product will be removed
 * @param {*} cartItems 
 * @param {*} product 
 */
const decreaseQty = (cartItems, product) => {
  const itemExists = cartItems.find((item) => item._id === product._id)

  if (itemExists.qty === 1) {
    return cartItems.filter((item) => item._id !== product._id)
  }

  return cartItems.map((cartItem) =>
    cartItem._id === product._id ? { ...cartItem, qty: cartItem.qty - 1 } : cartItem
  )
}

export const StateContext = createContext({
  itemQty: 0,
  increaseItemQty: () => { },
  decreaseItemQty: () => { },
  addItemToCart: () => { },
  cartTotalQty: 0,
  showCart: false,
  setShowCart: () => { },
  cartTotalPrice: 0,
  cartItems: [],
  increaseItemInCart: () => { },
  decreaseQty: () => { },
  removeItemInCart: () => { },
  setCartItems: () => { },
  setCartTotalQty: () => { },
  setCartTotalPrice: () => { },
})

export const StateProvider = ({ children }) => {
  const [itemQty, setItemQty] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [cartTotalQty, setCartTotalQty] = useState(0)
  const [cartTotalPrice, setCartTotalPrice] = useState(0)
  const [showCart, setShowCart] = useState(false)

  // For setting total cart qty
  useEffect(() => {
    const totalQty = cartItems.reduce((a, c) => {
      a += c.qty
      return a
    }, 0)
    setCartTotalQty(totalQty)
  }, [cartItems])

  // For setting total cart price
  useEffect(() => {
    const totalPrice = cartItems.reduce((a, c) => {
      a += c.price
      return a
    }, 0)
    setCartTotalPrice(totalPrice)
  }, [cartItems])

  const increaseItemQty = () => {
    setItemQty((prev) => prev + 1)
  }

  const decreaseItemQty = () => {
    if (itemQty <= 0) return
    setItemQty((prev) => prev - 1)
  }

  const addItemToCart = (product, qty) => {
    setCartItems(addNewToCart(cartItems, product, qty))
    setItemQty((prev) => prev - prev)
  }

  const increaseItemInCart = (product) => {
    setCartItems(addNewToCart(cartItems, product))
  }

  const decreaseItemInCart = (product) => {
    setCartItems(decreaseQty(cartItems, product))
  }

  const removeItemInCart = (product) => {
    setCartItems(cartItems.filter((item) => item._id !== product._id))
  }

  const value = {
    itemQty,
    increaseItemQty,
    decreaseItemQty,
    addItemToCart,
    cartTotalQty,
    showCart,
    setShowCart,
    cartTotalPrice,
    cartItems,
    increaseItemInCart,
    decreaseItemInCart,
    removeItemInCart,
    setCartItems,
    setCartTotalPrice,
    setCartTotalQty,
  }

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)