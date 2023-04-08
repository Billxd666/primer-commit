//Declarar una variable en tipo any puede ser util si se espera un valor de una biblioteca de terceros o entradas de usuario  en las que el resultado puede ser dinamico
let randomValue : any = 10;
randomValue = "BIll"; //*Ok
randomValue = true; //*Ok

//*Tipos de union en interseccion 

//*Los tipos de union e interseccion ayudan a controlar situaciones en las que un tipo se compone de dos o mas tipos posibles.
//*Un tipo de union describe un valor que puede ser uno de entre varios tipos. Esta flexibilidad puede ser util cuando no tenga controlado un valor 
//*por ejemplo  los valores de una biblioteca, una API o una entrada de usuario

let multiType: number | boolean;
multiType = 20; //*Valid
multiType = true; //*Valid
//*multiType = "string"; //*Invalid

//*Tipos de interseccion estan estrechamente relacionados con los tipos de union, se usan de manera muy diferente. Un tipo de interseccion combina dos o mas tipos para crear uno que tiene todas las propiedades de los tipos existentes. Una interseccion permite agregar tipos existentesde forma conjunta para obtener un tipo unico que tenga todas las caracteristicas que necesita

//*Un tipo de interseccion usa el simbolo de comercial (&) para separar cada tipo

//*Los tipos de interseccion se usan con mayor frecuencia con las interfaces. En el ejemplo siguiente se definen dos interfaces  y luego se crea un tipo de interseccion que combina las propiedades en ambas interfaces

interface Employee {
    employeeId: number;
    age: number;
}

interface Manager { 
    stockPlan: Boolean;
}

type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
    employeeId: 1234,
    age: 34,
    stockPlan: true
};

//*Tipos literales se escriben como objetos, funciones o literales de tipo constructor, y se usan para crear tipos a partir de otros

type testResult = "pass" | "fail" | "incomplete"; //se crea tipo para la variable
let myResult: testResult; //se crea la variable y se vincula al tipo  testResult
myResult = "incomplete" //ok
myResult = "fail" //ok
//*myResult = "drake" //error

//*Ejemplo con numeros de tipos literales

type diceRoll = 1 | 2 | 3 | 4 | 5; //*se crea el tipo 
let dice: diceRoll; //*se crea la variable y se vincula al tipo diceRoll
dice = 1; //*valid
dice = 2; //*valid
//*dice = 6; error
