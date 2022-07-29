/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LifeCycleExample extends Component {
    
    constructor(props) {
        super(props)
        console.log("Constructor: Cuando se instancia el componente")
    }

    componentWillMount() {
        console.log("WillMount: Antes del montaje del componente")
    }
    
    componentDidMount() {
        console.log("DidMoun: Justo al acabar el montaje del componente antes de renderizarlos")
    }

    componentWillReceiveProps(nextProps) {
        console.log("WillReceiveProps: Si va recibir nuevas props")
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Sirve para controlar si el componente debe o no actualizarse
         */
        // return true / false 
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("WillUpdate: Justo antes de actualizarse");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("DidUpdate: Justo después de actualizarse");
    }

    componentWillUnmount() {
        console.log("WillUnmount: Justo antes de desaperecer");
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}   

LifeCycleExample.propTypes = {

}