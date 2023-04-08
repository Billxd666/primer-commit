function Operaciones() {

  interface Variables {
    v1: number;
    t1: number;

}

///Cinematica en una dimension;

  class ejerciosOp implements Variables{
    v1: number;
    t1: number;


    constructor(v1: number , t1: number){
        this.t1 = t1;
        this.v1 = v1;
    }

    
}
let VelocidadP = new ejerciosOp();

let vel = VelocidadP.t1 * VelocidadP.v1;
console.log(vel);
}

