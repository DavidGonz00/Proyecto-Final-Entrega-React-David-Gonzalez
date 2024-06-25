import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
 
  const {id} = useParams()  
  const [Item, setItem] = useState({})

    useEffect(()=>{
      (async ()=>{
          const db = getFirestore ()
          const docRef = doc(db,"Items",id)
          const docSnap = await getDoc (docRef)
          setItem({id:docSnap.id,...docSnap.data()})
      })()
  },[])
  
    return (
      <div className='item-detail-container'>
        <ItemDetail item={Item}/>
      </div>
    )
  }

export default ItemDetailContainer;
