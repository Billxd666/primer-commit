//*Funciones con nombre: una funcion con nombre es una declaracion de funcion con la palabra clave (function). Las declaraciones de funciones con nombre se cargan en el contexto de ejecucion antes de que se ejecute cualquier codigo. Este proceso se conoce como elevacion y significa que puede usar la funcion antes de declararla 

//*La sintaxis para declarar una funcion con nombre se tiene qe proporcionar una anotacion de tipo para los parametros de la funcion y el valor de vuelto

//*La siguiente funcion acepta dos parametros de tipo number y devuelve un number.

function addNumbers (x: number, y: number): number{
    return x + y;
}

console.log(addNumbers(1,2));

//*Funciones anonimas: una expresion de funcion (o funcion anonima) es una funcion que no esta precargada en el contexto de ejecucion y solo se ejecuta cuando el codigo la encuentra. Las exprensiones de funcion se crean en tiempo de ejecucion y deben declararse antes de que puedan llamarse. No se elevan, a diferencia de las declaraciones de funciones con nombre que se elevan tan pronto como comienza la ejecucioon del programa y se pueden llamar antes de su declaracion.

//*Las expresiones de funcion representan valores, por lo que generalmente se asignan a una variable o se pasan a otras funciones, y pueden ser anonimas, lo que significa que la funcion no tiene nombre.

//*El siguiente ejemplo asigna una funcion  expresion a la variable addNumbers2. la funcion aparece en lugar del nombre de la funcion, lo que hace que la funcion sea anonima. Ahora puede usar esta variable para llamar a la funcion

let addNumbers2 = function (a: number, b: number): number {
    return a + b;
}

console.log(addNumbers2(2, 3))

let sum = function (input: number[]): number {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(sum([1, 2, 3]));

//*Las funciones flecha (tambien llamadas lamda o funciones de flecha debido al  => operador que se usa para definirlas) proporcionan una sintaxis abreviada para definir una funcion anonima. Debido a su naturaleza concisa, las funciones de flecha a menudo se usan con funciones simples en algunos escenarios de manejo de eventos

//Anonymous function
let addNumbers3 = function (x: number, y: number): number{
    return x + y;
}

let addNumbers4 = (x: number, y: number): number => x + y;

//*Si el cuervo de la funcion tiene mas de una sola linea, se y se escribe entre llaves  se incluye return si corresponde.

let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}