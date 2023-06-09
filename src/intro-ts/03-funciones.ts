
//Funciones 

//nombre que era una funcion y que retorna algo, y establecer el tipo de dato que se regresara
//esto sera despues
function sumar(a:number,b:number):number{

    return a+b
}

//Es una funcion pero se llama commo FLECHA 
const sumaFlecha=(a:number,b:number):number =>{

    return a+b
}
const resultados=sumar(3,4)

function multiplicar(numero1:number,numero2?:number, base:number=2):number{

    return numero1*base;
}

function operaBas(n1:number,n3:number=2):number{
    let tem=n1*n3;
    return tem;
}


//Si es en 0 el valor 2 ya que es opcional
const resultado21=multiplicar(5,0,10)
const resultado2=multiplicar(5,10)






console.log(resultado2)


interface Persona{
    nombre:string;
    edad:number;
    grup:()=>void;
    
}

function UTL(alumno:Persona,cuatrimestre:number):void{
    alumno.edad=23;
    console.log(alumno)
}

const NuevoAlumno:Persona={
    nombre:"Mario",
    edad:25,
    grup(){
        console.log('IDGS902',this.edad);
    }
}
//Aqui 
UTL(NuevoAlumno,44)

//funciones anonima

const funcSumar=function(num1:number,num2:number):number{
    return num1+num2;
}
console.log(funcSumar(4,9))

//Funciones con numeros opcionales
function calcular(numb1:number,numb2:number,numb3?:number):number{
    if(numb3)
        return numb1-numb2+numb3;
    else
    return numb1+numb2;
}

console.log(calcular(3,2,5))
console.log(calcular(2,3))


function calcular2(...valores:number[]){
    let suma=0
    for(let i=0; i<valores.length; i++)
        suma+=valores[i];
    return suma;
    
}

console.log(calcular2(3,2,5))
console.log(calcular2(2,3))