import React, { useState, useEffect } from 'react';
import '../ItemListContainer/ItemListContainet.css';
import { collection,getDocs,getFirestore } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [Items, setItems] = useState([]);
  

  useEffect(()=>{
    (async ()=>{
        const db = getFirestore ()
        const docsRef = collection(db,"Items")
        const querySnapshop = await getDocs (docsRef)
        setItems(querySnapshop.docs.map(doc => ({id:doc.id,...doc.data()})))
    })()
},[])

  return (
    <div className='container-card'>
      {Items.map(item=> <ItemList key={item.id} item={item}/>)}
    </div>
  )
}

export default ItemListContainer;


