import React, {useState} from 'react';

// Definiendo estilos en constatntes

// ? Estilo para usuario logueado
const loggedStyle = {
    color: "green",
    fontWeight: "500"
}

// ? Estilo para usuario no logueado
const unloggedStyle = {
    color: "tomato",
    fontWeight: "bold"
}

const GreetingStyled = (props) => {

    // Generamos un estado para el componente y asi controlar
    // su el usuario está o no logueado

    const [logged, setLogged] = useState(false);

    const greetingUsuer = () =>  (<p>Hola, {props.name} </p>) 
    const pleaseLogin = () => (<p>Pleas login</p>) 

    return (
        <div style={ logged ? loggedStyle: unloggedStyle }>
            { 
                logged ? greetingUsuer(): pleaseLogin()
            }
            
            <button onClick={() =>{
                console.log("Botón pulsado")
                setLogged(!logged);
            }}>
                { logged ? "Logout": "Loggin"}
            </button>
        </div>
    );
}

export default GreetingStyled;

