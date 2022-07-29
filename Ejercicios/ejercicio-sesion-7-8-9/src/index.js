import React from 'react';
import ReactDOM from 'react-dom/client';

// Añadimos bootstrap a nuestro proyecto
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// ! Importante: Los estilos propios, deber ir debajo de bootstrap para que haya error

import './index.css';


import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
