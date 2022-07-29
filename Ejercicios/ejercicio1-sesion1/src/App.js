import logo from './logo.svg';
import './App.css';
import ContactoListaContacto from "./componentes/componenteA"
import  Clock  from './componentes/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* <ContactoListaContacto></ContactoListaContacto> */}
          <Clock></Clock>
        </p>
      </header>
    </div>
  );
}

export default App;
