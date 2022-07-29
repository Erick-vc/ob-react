/**
 * Ejemplo de uso del ciclo de vida del método
 * en componente clase y el hook de ciclo de vida en 
 * componente funcional
 */

import React, { Component, useEffect } from 'react'

// COMPONENTE DE TIPO CLASE
export class Didmount extends Component {

    componentDidMount() {
        console.log("Comportamiento antes de que el componente sea añadido al DOOM (renderecie)");
    }

    render() {
        return (
            <div>
                <h1>DidMoun</h1>
            </div>
        );
    }
}

// COMPONENTE DE TIPO FUNCION
export const DidMountHook = () => {

    useEffect(() => {
        console.log("Comportamiento antes de que el componente sea añadido al DOOM (renderecie)");

    }, [])

    return (
        <div>
            <h1>DidMoun</h1>
        </div>
    )
}