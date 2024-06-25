import React from 'react'
import { useNavigate } from 'react-router-dom'

const ItemList = ({item}) => {

    const navigate = useNavigate()
     return (
          <div className="card-list" style={{ width: '18rem' }}>
            <img src={item.image} className="card-list-img" alt={item.name} />
            <div className="card-list-body">
              <h5 className="card-list-name">{item.name}</h5>
              <p className="card-list-description">{item.description}</p>
              <p className="card-list-text">Precio: ${item.price}</p>
              <p className="stock-list-container">Stock: {item.stock}</p>
              <button onClick={()=> navigate ("/detail/" + item.id)} className="btn-primary">Ver más</button>
            </div>
          </div>
        );
      };



export default ItemList