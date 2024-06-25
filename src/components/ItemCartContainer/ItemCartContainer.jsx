import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import './ItemCartContainer.css'

import { useNavigate } from 'react-router'


const ItemCartContainer = () => {
  const {cart,totalPriceCart} = useContext (CartContext)
  const navigate =useNavigate ()

  
  return (
    <div className='container-buttom-cart'>
        {cart.map(item => <ItemCart key={item.id} item={item}/>)}
        <p className='total-buttom-cart'>Total: {totalPriceCart}</p>
        <button className='buttom-cart' onClick={()=>navigate("/checkout")}>Proceder pago</button>
    </div>
  )
}

export default ItemCartContainer