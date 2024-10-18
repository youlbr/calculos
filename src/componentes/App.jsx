import { useState } from 'react'
import { Boton } from './boton'
import '../css/App.css'
import { Pantalla } from './pantalla.jsx'
import { BotonClear } from './botonClear'
import {evaluate} from 'mathjs'

function App() {
   const [count, setCount] = useState('')
   const agregarInput = val => {
    setCount(count + val);
  };
 
  const calcularResultado = () => {
    // Expresión regular para validar la entrada
    const validInputPattern = /^[0-9+\-*/().]*$/; // Permite números y operadores
  
    if (count) {
      // Verifica si la entrada es válida
      if (validInputPattern.test(count) && !/[\+\-\*\/]{2,}/.test(count)) {
        setCount('tu sabras...');
      } else {
        setCount(' eres un tonto...');
      }
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };
  
  return (
    <div className='App'>
      <h1>calculadore</h1>
      
      <div className='contenedor-calculadora'>
        <Pantalla  input={count} />
        <div className='fila'>
          <Boton  manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton  manejarClic={agregarInput}>3</Boton>
          <Boton  manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton  manejarClic={agregarInput}>4</Boton>
          <Boton  manejarClic={agregarInput}>5</Boton>
          <Boton  manejarClic={agregarInput}>6</Boton>
          <Boton  manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton  manejarClic={agregarInput}>7</Boton>
          <Boton  manejarClic={agregarInput}>8</Boton>
          <Boton  manejarClic={agregarInput}>9</Boton>
          <Boton  manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton  manejarClic={agregarInput}>0</Boton>
          <Boton  manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput} >/</Boton>
        </div>
        <BotonClear manejarClear={() => setCount('')}>
            Clear
          </BotonClear>
      </div>
    </div>
   
  )
}

export default App
