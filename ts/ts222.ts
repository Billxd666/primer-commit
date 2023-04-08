
interface Person {
    mes: number;
    age: number;
}


function greet(imprimir: Person) {
    return imprimir.age + imprimir.mes;

  }

  console.log(greet({age: 2 , mes:6}));

