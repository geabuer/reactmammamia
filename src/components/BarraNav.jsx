import React, { useContext } from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
import Contexto from '../context/Contexto'
import { Link } from 'react-router-dom'

const BarraNav = () => {
   const {total} = useContext(Contexto)
  return (
    
    <Navbar className="bg-body-tertiary">
      <Container>
      <Link to="/">🍕PIZZERIA MAMMA MIA!</Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           <Link to="/carrito">🛒Total:${`${total}`}</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
  )
}

export default BarraNav