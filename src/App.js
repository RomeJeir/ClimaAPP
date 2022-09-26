import './App.css';
import Clima from './componentes/Clima';
import NavBar from './componentes/NavBar';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';
import React, { useState, useEffect } from 'react';

function App() {

  const [ciudad, guardarCiudad] = useState('')
  const [pais, guardadPais] = useState('')
  const [error, guardarError] = useState(false)
  const [resultado, guardarResultado] = useState({})

  useEffect(() => {

    if (ciudad === '') return;

    llamarAPI();

  }, [ciudad, pais])


  const datosConsulta = datos => {

    if (datos.ciudad === '' || datos.pais === '') {
      guardarError(true)
      return
    }
    guardarCiudad(datos.ciudad)
    guardadPais(datos.pais)
    guardarError(false)
  }

  let componente

  if (error) {

    componente = <Error mensaje='Rellene los dos campos por favor'></Error>

  } else componente = <Clima resultado={resultado}></Clima>;{

  }

  const llamarAPI = async () => {

    const appID = 'bdd425739029c3cf4a5c8dd5f0f4e900'

    const urlClima = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`

    const respuesta = await fetch(urlClima)
    const resultado = await respuesta.json()

    guardarResultado(resultado)

  }


  return (
    <>

      <NavBar></NavBar>
      <center>
        <h1>Climas</h1>
      </center>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Formulario datosConsulta={datosConsulta}></Formulario>
            </div>
            <div className="col margin-top">
            <div>{componente}</div>
            </div>
            </div>
          </div>
    </>
  );
}

export default App;
