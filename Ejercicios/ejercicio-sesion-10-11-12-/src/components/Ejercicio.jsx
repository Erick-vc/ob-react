import React, {useState} from 'react';


function generarNumero(numero) {
    return (Math.random()*numero).toFixed(0);
}

function colorRGB() {
    var color = "("+generarNumero(255)+","+generarNumero(255)+","+generarNumero(255)+")";
    return "rgb" + color;    
}

const styleFigure = {
    backgroundColor: 'yellow',
    width: '255px',
    height: '255px'    
}



const styleFigureEntra = {
    backgroundColor: colorRGB(),
    width: '255px',
    height: '255px'  
}


const styleFigureSale = {
    backgroundColor: colorRGB(),
    width: '255px',
    height: '255px'  
}


const Figura = ({propStyle, entra, sale, inicio}) => {
    
    return (
        <div
            style={propStyle}
            onMouseOver={entra}
            onMouseOut={sale}
            onDoubleClick={inicio}
        ></div>
    )
}

const Ejercicio = () => {

    const [estado, setStado] = useState(0)

    const Entra = () => {
        setStado(1)
        // setColor(styleFigure.backgroundColor)
    } 
    const Sale = () => {
        setStado(2)
    }
    const Inicio = () => {
        setStado(0);
    }

    let figura;

    if(estado===0) {
        figura = <Figura
            propStyle={styleFigure}
            entra={Entra}
            sale={Sale}
            inico={Inicio}
        ></Figura>
    } else if (estado===1) {
        figura = <Figura
            propStyle={styleFigureEntra}
            entra={Entra}
            sale={Sale}
            inicio={Inicio}
        ></Figura>   
    } else {
        figura = <Figura
            propStyle={styleFigureSale}
            entra={Entra}
            sale={Sale}
        ></Figura>
    }



    return (
        <div>
            {figura}
        </div>

    );
}

export default Ejercicio;
