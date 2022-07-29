import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {Contacto} from '../../models/Contacto'
import {NIVEL} from '../../models/Nivel'

import "../../styles/contact.scss"

const ContactComponents = ({contact, casado, remove}) => {

    function ContactoNivel() {
        switch (contact.nivel) {
            case NIVEL.BASICO:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {contact.nivel}
                        </span>
                    </h6>
                )
            case NIVEL.MEDIO:
                return (
                    <h6 className='mn-0'>
                        <span className='badge bg-warning'>
                            {contact.nivel}
                        </span>
                    </h6>
                )
            case NIVEL.AVANZADO:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {contact.nivel}
                        </span>
                    </h6>
                )
        
            default:
                break;
        }
    }

    function ContactIconCasado() {
        if(contact.casado) {
            return ( <i onClick={() => casado(contact)} className="bi-toggle-on task-action" style={{color: "green"}}></i> ) 
        } else {
            return ( <i onClick={() => casado(contact)} className="bi-toggle-off task-action" style={{color: "grey"}}></i> ) 
        }
    }


    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'> { contact.name } </span>
            </th>
            <td className='align-middle'>
                <span> {contact.profesion} </span>
            </td>   
            <td className='align-middle'>
                {/* ICONOS DE NIVEL */}
                {ContactoNivel()}
            </td>
            <td className='align-middle'>
                {/* ICONOS DE CASADO */}
                {ContactIconCasado()}
                <i className='bi-trash task-action' onClick={() => remove(contact)} style={{color: 'tomato'}}></i>
            </td>
        </tr>
    )
}

ContactComponents.propTypes = {
    contact: PropTypes.instanceOf(Contacto).isRequired,
    remove: PropTypes.func.isRequired, 
    casado: PropTypes.func.isRequired
}

export default ContactComponents;