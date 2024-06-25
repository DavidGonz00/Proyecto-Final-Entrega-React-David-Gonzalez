import React, { useState } from 'react'
import  './Checkou.css'


const Checkout = ({completeOrder}) => {

  const [nameBuyer,setNameBuyer] = useState("")
  const [telBuyer,setTelBuyer] = useState("")
  const [emailBuyer,setEmailBuyer] = useState("")

  const handleCompleteOrder =async (e) => {
    e.preventDefault()
    const buyer = {
      name:nameBuyer,
      tel:telBuyer,
      email:emailBuyer
    }
    await completeOrder(buyer)
  }


  return (
    <form className='checkouBuyer' onSubmit={(e)=>handleCompleteOrder(e)}>
      <input type='text' value={nameBuyer} onChange={(e)=>setNameBuyer(e.targer.value)}placeholder='Ingrese su nombre' required />
      <input type='number' value={telBuyer} onChange={(e)=>setTelBuyer(e.targer.value)}placeholder='Ingrese su telefono' required />
      <input type='email' value={emailBuyer} onChange={(e)=>setEmailBuyer(e.targer.value)}placeholder='Ingrese su email' required />   
      <button type='submit'>Finalizar tu compra</button>
    </form>
  )
}

export default Checkout