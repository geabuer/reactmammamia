import React, { useContext } from 'react'
import Contexto from '../context/Contexto'
import PizzaCard from '../components/PizzaCard'
import { Col, Row } from 'react-bootstrap'

const Home = () => {
  const {pizzas}= useContext(Contexto)
    return (
    <div>
        <Row>
          {
            pizzas.map((p,i)=>{
              return <Col key={i}> <PizzaCard pizza={p}></PizzaCard> </Col>  
            })
          }
        </Row>
    </div>
  )
}

export default Home