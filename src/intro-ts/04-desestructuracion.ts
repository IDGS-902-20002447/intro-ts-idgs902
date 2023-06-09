//destructuracion de objetos y arreglos

interface Alumno1 {
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}

interface Grupo{
    grupo:string;
    year:number;
}

const alumno2:Alumno1={
    matricula1:1234,
    nombre:'Mario',
    edad:24,
    correo:'mario@gmailcomo',
    grupo:{
        grupo:'idgs',
        year:1998,
    }
}

console.log(`La matricula es: ${alumno2.matricula1}`)
console.log(`La matricula es: ${alumno2.grupo.year}`)

//Esta es la desetructuracion
const{matricula1,grupo:xx}=alumno2
const{grupo,year:anio}=xx

console.log(`El año es: ${anio}`)

//Destructuracion de arreglos
const idgs:string[]=['IDGS','IEVN','REDES'];
console.log(`grupo 1: ${idgs[0]}`)
console.log(`grupo 2: ${idgs[1]}`)
console.log(`grupo 3: ${idgs[2]}`)

const[a,b]=idgs;
console.log(`grupo1; ${a}`)
console.log(`grupo1; ${b}`)
