// ****
import React, {  useEffect } from 'react'
const Clock = () => {
    constructor((props) => {
        // super(props);
        // Estado privado del component
        this.state = {
           // Se genera una fecha como estado inicial del componente
           fecha: new Date(),
           edad: 0,
           nombre: "Martín",
           apellidos: "San José"
        };
     })



   useEffect(() => {
       this.timerID = setInterval (
           () => this.tick(), 1000
        );
   })

   useEffect(() => {
       clearInterval (this.timerID);
   })

   useEffect(() => {
       this.setState((prevState) => {
           let edad = prevState.edad +1;
           return {
              ...prevState,
              fecha: new Date(),
              edad
           }
        });
   })


   return (
       <div>
           <h2>
           Hora Actual:
           {this.state.fecha.toLocaleTimeString()}
           </h2>
           <h3>{this.state.nombre} {this.state.apellidos}</h3>
           <h1>Edad: {this.state.edad}</h1>
       </div>
   )

}
export default Clock;