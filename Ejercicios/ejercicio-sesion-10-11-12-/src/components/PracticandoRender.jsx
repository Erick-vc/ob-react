import React, {useState} from 'react';

let red = '0';
let green = '200';
let blue = '150'


const estiloIngresar =  {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    color: 'white',
    fontWeight: 'bold'
}

const estiloSalir = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}



const Entrar = ({estilo, ingreso}) => {
    return (
        <button
            style={estilo}
            onClick={ingreso}
        >Ingresar</button>
    )
}

const Salir = ({estilo, salio}) => {
    return (
        <button
            style={estilo}
            onClick={salio}
        >Salir</button>
    )
}

const BorrarMensaje = ({borrar}) => {
    return (
        <button
            onClick={borrar}
        >Borrar</button>
    )
}

const BorrarUnMensage = ({borrarUno}) => {
    return (
        <button
            onClick={borrarUno}
        >Borrar un Mensaje</button>
    )
}

const PracticandoRender = () => {

    const [estado, setEstado] = useState(false);
    const [messages, setMessages] = useState(0);



    const ingresa = () => {
        setEstado(true);
    }
    const salida = () => {
        setEstado(false)
    }

    let optionalButton;

    if(estado) {
        optionalButton=<Salir
            estilo = {estiloSalir}
            salio = {salida}
        ></Salir>

    } else {        
        optionalButton=<Entrar
            estilo = {estiloIngresar}
            ingreso = {ingresa}
        ></Entrar>

    }


    let agregarMessages = () => {
        setMessages(messages +1)
    }

    let borrarMensajes = () => {
        setMessages(0)
    }

    let borrarUnMensaje = () => {
        setMessages(messages-1)
    }

    let btnBorrar, btnBorrarUno;

    if (messages===1) {
        btnBorrar = <BorrarMensaje
        borrar={borrarMensajes}
        ></BorrarMensaje>
        
    } else if(messages>1) {
        btnBorrarUno = <BorrarUnMensage
         borrarUno={borrarUnMensaje}
        ></BorrarUnMensage>
        btnBorrar = <BorrarMensaje
            borrar={borrarMensajes}
        ></BorrarMensaje>

    } else {
        console.log('hola')
    }


    return (
        <div>
            {!estado? (<h1>Ingrese a la aplicacion</h1>):
            <h1>Salir de la aplicacion</h1>
            }
            { optionalButton }

            {/* Operador ternario */}
            {
                estado? (
                    <div>
                        {
                            messages > 0 ?
                            <p>Tu has escrito {messages} nuevo{
                                messages>1?'s':null
                            } mensaje{
                                messages>1?'s':null
                                }...</p>
                            : <p>No has escrito ningun mensaje</p>
                        }
                        {
                            <button
                                onClick={agregarMessages}
                            >
                                {
                                    messages===0?
                                    'Agregue tu primer mensaje':
                                    'Agrega un nuevo mensaje'
                                    
                                }
                            </button>
                        }
                        { btnBorrar }
                        { btnBorrarUno }
                    </div>
                ) : null

            }


        </div>
    );
}

export default PracticandoRender;
