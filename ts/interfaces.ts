//*Para declarar una interfaz, se empieza con la palabra clave interface, seguida del nombre de la interfaz (el identificador). El nombre de la interfaz no puede ser uno de los nombres de tipos definidos. Por convencion, los nombtes de interfaces estan en PascalCase y sin la letra I

//*Se puede agregar un el signo de interrogacion (?) al final del nombre de la propiedad, Se usa para las propiedades que no son obligatorias . Esto impide que el sistema de tipos genere un error si se omite la propiedad

//*Interfaz creada
interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string
}

//*Despues se puede implementar la interfaz, se comienza usando la interfaz IceCream como un tipo en una declaracion de variable. Se declara la variable denominada myIceCream de tipo IceCream y, luego se asigna los valores a las propiedades obligatorias
// let myIceCream: IceCream = {
//     flavoor: 'vainilla',
//     scoops: 2
// }
// console.log(myIceCream.flavoor);

//Ejercicio con interfaces y funciones: se va a crear una funcion denominada tooManyScoops, que usa la interface IceCream como tipo de parametro. Esta funcion compureba el numero de "scoops" en el objeto de IceCream y devuelve un mensaje segun el resultado para probar el trabajo, se pasa el objeto  {flavoor: 'vainilla', scoops: 5} como parametro y devuelvalo a la consola para comprobar resultado

// function tooManyScoops(dessert: IceCream){
//     if (dessert.scoops <= 4){
//         return dessert.scoops + ' is too many scoops';
//     } else {
//         return 'your order will be ready son!';
//     }
// }

// console.log (tooManyScoops({flavoor:'vainilla', scoops: 5}))

// function tooManyScoops(dessert: IceCream) {
//     if (dessert.scoops >= 4) {
//        return dessert.scoops + ' is too many scoops!';
//     } else {
//        return 'Your order will be ready soon!';
//     }
//  }
 
//  console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));


//*Extension de una interfaz: las interfaces se pueden extender entre si. esto ofrece mas flexibilidad a la hora de separar las interfaces en componentes reutilizables.
//*al extender una interfaz con una o varias interfaces, se aplican las siguientes reglas: debe impplementar todas las propiedades obligatorias de todas las interfaces
//*dos interfaces pueden tener la misma propiedad si esta tiene el mismo nombre y el mismo tipo
//*Si dos interfaces tienen una propiedad con el mismo nombre pero tipos diferentes, se debe declarar una nueva propiedad de modo que la propiedad resultante sea un subtipo de ambas interfaces

interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
}
// function tooManyScoops(dessert: Sundae) {
//     if (dessert.scoops >= 4) {
//        return dessert.scoops + ' is too many scoops!';
//     } else {
//        return 'Your order will be ready soon!';
//     }
//  }

//  console.log(tooManyScoops({flavor: 'vainilla', scoops:5, sauce: 'Chocolate'}))

function tosoManyScoops(dessert: Sundae): string {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}
console.log(tosoManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));