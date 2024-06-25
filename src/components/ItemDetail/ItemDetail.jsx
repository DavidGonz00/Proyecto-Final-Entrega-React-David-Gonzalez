import React, { useContext, useState } from 'react'
import Count from '../Count/Count'
import '../ItemDetail/ItemDetail.css'
import '../Count/Count.css'
import CartContext from '../../context/cart/CartContext'

const ItemDetail = ({item}) => {

   const [count, setCount] = useState(1)
   const {cart,addItemCart} = useContext(CartContext)
   
  
    

  return (
    <div className='item-detail-container' >
        <div className="card">
            <img src={item.image} className="card-img" alt={item.name} />
            <div className="card-body">
                <h5 className="card-name">{item.name}</h5>
                <p className="card-description">{item.description}</p>
                <p className="card-price">Precio: ${item.price}</p>
                <p className="card-stock">Stock: {item.stock}</p>
                <Count count={count} handleCount={setCount} stock={item.stock}/>
                <button onClick={() => addItemCart({...item,cuantity:count})} className='counter-button'>Carrito</button>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail