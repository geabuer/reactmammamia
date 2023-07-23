import React, { useContext, useEffect } from 'react'
import Contexto from '../context/Contexto'
import { Container } from 'react-bootstrap'



const Carrito = () => {
  const {carrito, setCarrito, agregarAlCarrito, pizzas, cambiarCantidad, total } = useContext(Contexto)
      
  return (
   <Container>
   
    <table>
      {
        carrito.map((p)=>{
          const selectedPizza= pizzas.find(element=>element.id==p.id)
          console.log(selectedPizza)
          return <tr>
            <td><img style={{width:70}} src={selectedPizza.img} alt="" /></td>
            <td>{selectedPizza.name}</td>
            <td style={{width:700}}></td>
            <td>{"$"+ selectedPizza.price*p.cantidad}</td>            
            <td><button onClick={()=>cambiarCantidad(p.id, -1)}>-</button></td>
            <td>{p.cantidad}</td>
            <td><button onClick={()=>cambiarCantidad(p.id, 1)}>+</button></td>
            </tr>
        })
      }
    </table>
    <div>Total: ${total}</div>
   </Container>
  )
}

export default Carrito