// Ejemplo de uso el Hook useState
// Crear un componente de tipo funcion y acceder a su estdao
// privado a través de un hook y, además, poder modificarlo

import React, { useState } from 'react';

// rfc ->
const Ejercicio1 = () => {
    
    // COMPONENTEN PRIVADOS

    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre: "Erick",
        email: "erick@gmail.com"
    }

    /**
     * Queremos que el VALORINICIAL Y PERSONAINICIAL sean
     * parte del estado del componente para así poder gestionar su cambio
     * y que éste se vea reflejado en la vista del componente
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * funcion para actualizar el estado privado que contiene el contador
     */
   
    function incrementar() { 
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador+1)
        // setIncremento(incremento+1)
    }

    /**
     * funcion para actualizar el estado de peresona en el componente
     */
    function actualizarPersona() {
        setPersona(
            {
                nombre: "Kevin",
                email: "Kevin@unmsm.edu.pe",
            },
        )
        // setPersona(persona);
    }
    function regresarInicio() {
        setContador(valorInicial);
        setPersona(personaInicial);
    }


    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador} </h2>
            <h2>DATOS DE LA PERSONA: </h2>
            <h3>NOMBRE: {persona.nombre} </h3>
            <h4>EMAIL: {persona.email} </h4>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementar}>Incrementar persona</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
            <button onClick={regresarInicio}>Refreshear</button>
        </div>
    );
}

export default Ejercicio1;
