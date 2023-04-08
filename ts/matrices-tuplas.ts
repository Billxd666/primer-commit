//*Matrices: las matrices se pueden escribir de dos maneras. En la primera se usa el tipo de los elementos seguidos de corchetes ([]) para denotar una matriz de ese tipo de elemento para denotar una matriz de ese tipo de elemento:


let list: number[] = [1, 2 , 3]; //*forma1

let list2: Array <number> = [1, 2, 3]; //*forma2

//*Tuplas una matriz de los mismos tipos  de valor pero a veces tiene una matriz que contiene valores de tipos mixtos. Para ese proposito son las tuplas. Para declarar una tupla la sintaxis es: variableName: [type, type]

let person1: [string, number] = ["Bill", 22] //se ingresa primero el tipo de dato y despues se ingresan los valores

//*let person2: [string, number] = ["Bill", 22, true] //en este ejemplo marca error por que no se agrego el tipo  boolean

//*let person3: [string, number] = [22, "Bill"] //en este ejemplo marca error por que el orden de los valores debe coincidir con el orden de los tipos
