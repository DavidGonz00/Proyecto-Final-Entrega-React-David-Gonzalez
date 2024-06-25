import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import './ItemCart.css'

const ItemCart = ({ item, onRemove }) => {
  return (
   
  <div className="card-container-cart">
      <div className="col-md-4">
        <img src={item.image} className="card-img-cart" alt={item.name} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-name-cart">{item.name}</h5>
          <p className="card-text-cart">{item.description}</p>
          <p className="card-price-cart"><small className="text-muted">Precio: ${item.price}</small></p>
          <p className="card-stock-cart">Cantidad: {item.cuantity}</p>
          <button onClick={onRemove} className="btn btn-danger">Eliminar</button>
        </div>
      </div>
    </div>


  )
  
}

export default ItemCart