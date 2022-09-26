import './App.css';
import React, { useState } from "react";

export default function Formulario({ datosConsulta }) {

    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: '',
    })

    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })

    }

    const consultarClima = e => {
        e.preventDefault();

        datosConsulta(busqueda);
    }

    return (

        <>

            <form className="margin-top">
                <label className="margin-top">Escriba la ciudad</label><br></br>
                <input className="width" type="text" name="ciudad" id="ciudad" onChange={handleChange}></input>
                <br></br><br></br>
                <select className="width" onChange={handleChange} name="pais">
                    <option value="">Seleccione el pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select><br></br><br></br>
                <button type="button" className="btn btn-primary button-margin" onClick={consultarClima}>Ver clima</button>
            </form>

        </>

    );

}