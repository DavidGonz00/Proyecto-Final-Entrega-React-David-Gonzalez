import React, { useContext } from 'react'
import './CheckoutContainer.css'
import Checkout from '../Checkout/Checkout'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router'
import CartContext from '../../context/cart/CartContext'

const CheckoutContainer = () => {
  const navigate = useNavigate ()
  const { cart,totalPriceCart,clearCart} = useContext (CartContext)

const completeOrder = async (buyer) => {
  
  const order ={
    buyer,
    item:cart,
    total:totalPriceCart
  }
  
  const db = getFirestore()
  const docRef  = collection (db,"orders")
  await addDoc (docRef,order)
  clearCart()
  navigate ("/orders")
}
  
  return (
    <Checkout completeOrder={completeOrder}/>
  )
}

export default CheckoutContainer