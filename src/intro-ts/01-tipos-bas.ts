// let para declara la variable
let nombre:string ="RFC"

nombre="Nadia"
console.log("Nombre "+nombre)

//Acepta dos tipos de variables
let datos:string| number=95
//Si no se da un valor toma el number
datos="IDGS902"
console.log(datos)

let vivo:boolean=false

// FOR
let vector:number[]=[1,4,3]
vector[2]=8
vector.push(9)

for (let elemento of vector) {
    console.log(elemento)
}

console.log(vector)

console.log(vivo)


// TEMA DEL ARCHIVO :
//Objetos , arreglos, interfaces

//permite cualquier tipo de dato "any"


let mascotas=['perro','gato',100,true]

console.log(mascotas)

let tem:(boolean|number|string)[]=['aaaa',100]
let nombres:string[]=['Juan','pedro','mario']
console.log(nombres)


//Para la interface solo el tipo de valores y lo que contendra la interfaces
interface Persona{
    nombre:string,
    grupo:string,
    edad:number,
    materias:string[],//muchas materias
    activo?:string
}

const alumno:Persona={
    nombre:'Mario',
    grupo:'IDGS902',
    edad:23,
    materias:['Español']
}

alumno.activo="Inscrito"

console.table(alumno)
