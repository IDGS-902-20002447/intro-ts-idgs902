
//Inserta numeros
class PilaEntero{
    private vec:number[]=[];
    insertar(x:number){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop()
        else
            return null;
    }
}

//Inserta cadenas
class PilaString{
    private vec:string[]=[];
    insertar(x:string){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop()
        else
            return null;
    }
}

//Enteros
let pila1=new PilaEntero();
pila1.insertar(23);
pila1.insertar(28)
pila1.insertar(2);

console.log(pila1.extraer())

//Cadenas
let pila2=new PilaString();
pila2.insertar("huj");
pila2.insertar("Hola")
pila2.insertar("Gue");

console.log(pila2.extraer())


//clase genericos

class PilaGenerica<T>{
    private vec:T[]=[];
    insertar(x:T){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop()
        else
            return null;
    }
}

let pila3=new PilaGenerica<number>();
pila3.insertar(23);

let pila4=new PilaGenerica<string>();
pila4.insertar("Gue");

console.log(pila3.extraer())

console.log(pila4.extraer())
