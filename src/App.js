
import './App.css';
import Home from './views/Home';
import Pizza from './views/Pizza';
import Carrito from './views/Carrito';
import { Await, BrowserRouter, Route, Routes } from 'react-router-dom';
import Contexto from './context/Contexto';
import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import BarraNav from './components/BarraNav';

function App() {
  const [pizzas, setPizzas]= useState([])
  const [total, setTotal]= useState(0)
  const [carrito, setCarrito]= useState([])

  const calcularTotal= ()=>{
    let suma = 0
    carrito.map((p)=>{
      suma+= p.cantidad*pizzas.find(element=>element.id==p.id).price
    })
    setTotal(suma)
  }

  const cambiarCantidad = (id, cantidad) =>{

    const temp = carrito.map((p)=>{
        if (p.id === id) {
            return {...p, cantidad: p.cantidad+cantidad};
          }
    })
    setCarrito(temp)
}
     
      
  

  const agregarAlCarrito= (id)=>{
    const index = carrito.findIndex((p) => p.id===id)
    if (index >= 0){
      carrito[index].cantidad++;
      setCarrito([...carrito]);
    } else{
      carrito.push({id:id, cantidad:1});
      setCarrito([...carrito])
    }

  }
  const obtenerDatos= async()=>{
    const res = await fetch('http://localhost:3000/pizzas.json');
    const datos = await res.json();
    setPizzas([...datos]);
  }  

  useEffect(() => {
    obtenerDatos(); 
    },[])
    useEffect(() => {
      if (carrito.length>0)
      {calcularTotal()} 
      },[carrito])
  return (
    <div className="App">
      <Contexto.Provider value={{pizzas, total, setTotal, agregarAlCarrito, carrito, setCarrito, setPizzas, cambiarCantidad}}>
       
       <BrowserRouter>
       <BarraNav></BarraNav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/pizza/:id" element={<Pizza></Pizza>}></Route>
          <Route path="/carrito" element={<Carrito></Carrito>}></Route>
        </Routes>
       </BrowserRouter>
       </Contexto.Provider>
    </div>
  );
}

export default App;
