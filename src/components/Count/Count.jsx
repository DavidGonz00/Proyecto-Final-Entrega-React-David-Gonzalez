import React, { useState } from 'react';
import './Count.css'


const Count = ({ count, handleCount, stock }) => {

  const incremetCount = () => {
    if (count < stock) 
      handleCount(count => count + 1 );
    }


  const decrementCount = () => {
    if (count > 1) 
      handleCount(count => count - 1);
    }


  return (
    <div className="counter">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incremetCount}>+</button>
      
    </div>
  );
};

export default Count
