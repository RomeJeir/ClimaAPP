import React, { useState } from "react"

export default function Clima(props) {

    const {name, main} = props.resultado

    if(!name) return null

    const kelvin = 273.15

    return (
        <>
            
                <div className="card text-primary">
                    <div className="card-body">
                        <h5 className="card-title text-center">El clima de {name} es:</h5>
                        <h2 className="card-text text-center"> {parseInt(main.temp - kelvin, 10)}&#x2103;</h2> 
                        <p>Maxima temperatura: {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
                        <p>Minima temperatura: {parseInt(main.temp_min - kelvin)} &#x2103;</p>
                    </div>
                </div>
        </>
    )
}