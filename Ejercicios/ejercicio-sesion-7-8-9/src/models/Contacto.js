import {NIVEL} from "./Nivel"


export class Contacto {
    name="";
    profesion="";
    casado=false;
    nivel=NIVEL.MEDIO;

    constructor(name, profesion, casado, nivel) {
        this.name=name;
        this.profesion=profesion;
        this.casado=casado;
        this.nivel=nivel;
    }

}
