import React from 'react';
import { Contacto } from "../modulos/Contacto.class"
import  ContactoComponente  from "./componenteB.jsx"

const ContactoListaContacto = () => {
    const defaultContacto = new Contacto("Erick", "Villalobos", "erick@unmsm.com", false )

    return (
        <div>
            <div>
                Tus contactos
            </div>
            <ContactoComponente contacto={defaultContacto}>

            </ContactoComponente>
        </div>
    )
}

ContactoListaContacto.propTypes = {
    
}

export default ContactoListaContacto;