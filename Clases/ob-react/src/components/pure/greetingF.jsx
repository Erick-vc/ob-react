import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    // Breve introducción a useState
    // const [variable, método para actualizarlo] = useState(29)
    const [age, setage] = useState(29);

    const birthday = () => {
        // actualizamos el State
        setage(age+1)
    }

    return (
        <div>
            <h1>
                ¡HOLA {props.name} desde componente funcional!
            </h1>
            <h2>
                Tu edad es de: { age }
            </h2>
            <button onClick={birthday}>
                Cumplir años
            </button>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};

export default GreetingF;
