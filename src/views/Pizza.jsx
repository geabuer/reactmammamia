import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Contexto from '../context/Contexto';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Pizza = () => {
    const {id} = useParams();
    const {pizzas} = useContext(Contexto);

    const pizza = pizzas.find((p)=> p.id === id)

  return (

    <Container>
      <Row style={{ width: '73vw', textAlign :'left' }}>
        <Col style={{ width: '50vw'}}>
        <Card.Img variant="top" src={pizza.img} />
        </Col>
        <Col>
          <div><strong>{pizza.name}</strong></div>
          <div>{pizza.desc}</div>
          <ul style={{listStyle:'none'}}>
            {pizza.ingredients.map((ing,i)=>{
              return (<li key={i}>🍕{ing}</li>)
            })}
          </ul>
          <div>Precio:${pizza.price}</div>
          <Button href="/" className='btn btn-danger'>Añadir</Button>
        </Col>
      </Row>
      
    </Container>
   
    //<div>
     // Pizza: {pizza.name}
      //Ingredientes:{pizza.ingredients} 
    
    //</div>
  )
}

export default Pizza