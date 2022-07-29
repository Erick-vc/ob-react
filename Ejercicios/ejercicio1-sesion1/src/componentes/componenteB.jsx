import React from 'react';
import {Contacto} from "../modulos/Contacto.class"
import propTypes from 'prop-types';

const ContactoComponente = ({contacto}) => {
    return (
        <div>
            <h2>
                Nombre: { contacto.Nombre }
            </h2>
            <h3>
                Apellido: { contacto.Apellido }
            </h3>
            <h4>
                Email: { contacto.Email }
            </h4>
            <h5>
                Estado: { contacto.Conectado ? "Contacto en Linea":"Contacto no disponible"}
            </h5>
        </div>
    )
}

ContactoComponente.propTypes = {
    contacto: propTypes.instanceOf(Contacto)
}

export default ContactoComponente;