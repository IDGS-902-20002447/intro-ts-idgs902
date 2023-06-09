
class Persona5{
    protected nombre:string;
    protected edad:number;
    
    constructor(nombre:string, edad: number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Nombre: ${this.edad}`)
    }
}


class Empleado extends Persona5{
    private sueldo:number;
    constructor(nom:string,edad:number,sueldo:number){
        //Para pasar variale de hijo a padre SUPER
        super(nom,edad);
        this.sueldo=sueldo;
    }
    imprimir(){
        super.imprimir()
        console.log(`Sueldo: ${this.sueldo}`)
    }
}