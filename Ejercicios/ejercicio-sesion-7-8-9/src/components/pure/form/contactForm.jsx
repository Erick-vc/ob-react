import React, {useRef} from "react"
import PropTypes from 'prop-types'
import { NIVEL } from "../../../models/Nivel";
import { Contacto } from "../../../models/Contacto";

const ContactForm = ({add}) => {

    const nombre = useRef("");
    const profesion = useRef("");
    const nivel = useRef("");


    function addContact(e) {
        e.preventDefault();
        const newContact = new Contacto(
            nombre.current.value,
            profesion.current.value,
            false,
            nivel.current.value
        )

        add(newContact)
    }


    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className="form-outline flex-fill">

                <input ref={nombre} id='inputName' type='text' className="form-control form-control-lg" required autoFocus placeholder="Tu nombre"  />

                <input ref={profesion} id='inputDescription' type='text' className="form-control form-control-lg" required autoFocus placeholder="Tu profesion"  />

                <label htmlFor='selectLevel' className="sr-only">Nivel  </label>

                <select ref={nivel} defaultValue={NIVEL.BASICO} id='selectNivel' >
                    <option value={NIVEL.BASICO}>
                        Basico
                    </option>
                    <option value={NIVEL.MEDIO}>
                        Medio
                    </option>
                    <option value={NIVEL.AVANZADO}>
                        Avanzando
                    </option>
                </select>

            </div>
            <button type="submit" className="btn btn-success btn-lg ms-2">Agregar</button>
        </form>
    )
}

ContactForm.propType = {
    add: PropTypes.func.is
}

export default ContactForm;