/**
 * Ejemplo de uso del método componentWillUnMount para componenete clase
 * Ejemplo de uso del hooks para componente funcional
 * (Cuando el componente va a desaperecer)
 */

import React, { Component, useEffect } from 'react'

// COMPONENTE TIPO CLASE
export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log("Comportamiento antes de que el componente desaparezca")
    }

    render () {
        return(
            <div>
                <h1>
                    WillUnMount
                </h1>
            </div>
        )
    }
}

// COMPONENTE TIPO FUNCION
export const WillUnMountHook = () => {

    useEffect(() => {
        // aqui no ponemos nada
        return () => {
            console.log("Comportamiento antes de que el componente desaparezca")
        };
    }, []);

    return (
        <div>
            <h1>
                WillUnMount
            </h1>
        </div>
    )
}