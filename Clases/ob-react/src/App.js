// import logo from './logo.svg';
import './App.css';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo4 from "./hooks/Ejemplo4"
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from "./components/container/task_list"
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import OptionalRender from './components/pure/optionalRender';
// import GreetingStyled from './components/pure/greetingStyled';
// import Father from './components/container/father';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente propio Greeting.jsx*/}
        {/* <Greeting name="Erick Villalobos"></Greeting> */}
        {/* Componente de ejemplo funcional */}
        <GreetingF props="Erick"></GreetingF>
        {/* Componente de listado de tareas */}

        {/* PROYECTO FINAL */}
        {/* <TaskListComponent></TaskListComponent> */}

        {/* Ejemplo de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* Todo lo que hay aquí dentro, es tratado como props.chidren */}
        {/* <Ejemplo4 nombre="Erick">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name="Erick"></GreetingStyled> */}
        {/* Gestion de eventos */}
        {/* <Father></Father> */}
      {/* </header> */}

        {/* Ejemplo de Renderización condicional */}
        {/* <OptionalRender></OptionalRender> */}
        {/* Ejemplos de uso de Formik y Yup */}
        {/* <LoginFormik></LoginFormik> */}
        {/* <RegisterFormik></RegisterFormik> */}

    </div>
  );
}

export default App;
