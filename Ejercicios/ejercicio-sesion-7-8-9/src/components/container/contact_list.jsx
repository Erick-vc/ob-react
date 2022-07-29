import React, {useState, useEffect} from 'react'
import { Contacto } from '../../models/Contacto'
import { NIVEL } from '../../models/Nivel'
import ContactComponents from '../pure/contact'
import ContactForm from '../pure/form/contactForm'



const ContactListComponent = () => {

    const contact1 = new Contacto("Erick", "Developer", false, NIVEL.BASICO);
    const contact2 = new Contacto("Mario", "Arquitecto", true, NIVEL.MEDIO);
    const contact3 = new Contacto("Enrique", "Programador", false, NIVEL.AVANZADO);
    
    
    //  Estado del componente

    const [contacts, setContacts] = useState([contact1, contact2, contact3])
 

    //  Funciones para cambiar si es casado o no y la funcion para eliminar contactos

    function completeCasado(contact) {
        console.log('Completa si eres casado', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].casado = !tempContacts[index].casado;
        setContacts(tempContacts);
    }

    function deleteContacts(contact) {
        console.log('Eliminar este contacto', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1)
        setContacts(tempContacts);
    }

    function addContact(contact) {
        console.log("Agregando un nuevo contacto", contact)
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    // *** LO QUE SE MUESTRA

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Emcabezado de la tarjeta */}
                    <div className='card-header p-3'>
                        <h5> Tus contactos </h5>
                    </div>
                    {/* Contenido del cuerpo de la tajeta */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                        <table>

                            <thead>
                                <tr>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Profesion</th>
                                    <th scope='col'>Dificultad</th>
                                    <th scope='col'>Casado</th>
                                </tr>
                            </thead>

                            <tbody>
                                { contacts.map((contact, index) => {
                                        return (
                                            <ContactComponents
                                                key={index}
                                                contact={contact}
                                                casado={completeCasado}
                                                remove={deleteContacts}
                                            ></ContactComponents>
                                        )
                                    }
                                ) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={addContact}></ContactForm>
        </div>
    )
}

ContactListComponent.propTypes = {

};

export default ContactListComponent;








