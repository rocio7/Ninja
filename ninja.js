class Ninja{
        constructor(nombre){
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
        }

    sayName(){
        console.log(this.nombre);
    }
    
    showStats(){
        console.log("Nombre: " + this.nombre);
        console.log("Salud: " + this.salud);
        console.log("Velocidad: " + this.velocidad);
        console.log("Fuerza: " + this.fuerza);
    }

    drinkSake(){
        this.salud += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

console.log("*********Clase Sensei************************");

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10
    }
    speakWisdom(){
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
        super.drinkSake();
    }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"