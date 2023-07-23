import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Contexto from '../context/Contexto'

const PizzaCard = ({pizza}) => {
    const {agregarAlCarrito} = useContext(Contexto)
    const navigate = useNavigate();
    const navegarPizza = (id)=>{
      navigate (`/pizza/${id}`);
    }
  
  return (
    
    <Card style={{ width: '25vw' , margin:'1em' }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
          <ul style={{listStyle:'none'}}>
            {pizza.ingredients.map((ing,i)=>{
              return (<li key={i}>🍕{ing}</li>)
            })}
          </ul>
        </Card.Text>
        <Button variant="primary" onClick={()=>navegarPizza(pizza.id)}>Detalle</Button>
        <Button variant="danger" onClick={()=>agregarAlCarrito(pizza.id)}>Agregar</Button>
      </Card.Body>
    </Card>
    
  )
}

export default PizzaCard