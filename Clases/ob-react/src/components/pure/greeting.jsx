import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props) {
        // informacion que yo le paso por atributos
        super(props);
        // informacio nprivada del compomente que srive para gestionarse  o mostrarse 
        this.state = {
            age : 29
        }
    }

    render() {
        return (
            <div>
                <h1>
                    ¡HOLA { this.props.name } !
                </h1>
                <h2>
                    Tu edad es de: { this.state.age }
                </h2>
                <div>
                    <button onClick={ this.birthday }>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;


