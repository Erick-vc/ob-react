
export const PRIO = {
    BAJA: 'baja',
    MEDIA: 'media',
    ALTA: 'alta'
}

export class Tarea {
    nombre= '';
    descripcion='';
    prioridad=PRIO.MEDIA;

    constructor(nombre, descripcion, prioridad) {
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.prioridad=prioridad;
    }

}

