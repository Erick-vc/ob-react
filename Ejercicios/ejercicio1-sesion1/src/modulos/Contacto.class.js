export class Contacto {
    Nombre = "";
    Apellido = "";
    Email = "";
    Conectado = false;

    constructor (nombre, apellido, email, conectado) {
        this.Nombre=nombre;
        this.Apellido=apellido;
        this.Email=email;
        this.Conectado=conectado;
    }

}
