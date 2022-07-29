/**
 * Ejemplo de uso de método componentDidUpdate en componente de clase
 * y uso de hook en componente funcional
 */

import { render } from '@testing-library/react'
import React, { Component, useEffect } from 'react'
import { u } from 'tar'

// COMPONENTE DE TIPO CLASE
export class DidUpdate extends Component{

    componentDidUpdate() {
        console.log("Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado")
    }

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        )
    }
}

// COMPONENTE DE TIPO FUNCIONAL
export const DidUpdateHook = () => {

    useEffect(() => {
        console.log("Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado")
    });

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    )
}

