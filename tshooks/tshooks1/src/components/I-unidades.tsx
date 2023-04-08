import React from "react";

//Longitud unidades
interface Longitudes {
    
    //Unidad principal
    metro: number;

    //Submultiplos
    decimetro: number;
    centimetro: number;
    milimetro: number;

    //Multiplos
    decametro: number;
    hectometro: number;
    kilometro: number;

}

//Tiempo unidades
interface Tiempo{

    //Unidad principal
    segundo: number;

    //Submultiplos
    milisegundos: number;
    microsegundos: number;
    nanosegundo: number;

    //Multiplos
    minuto: number;
    hora: number;
}

//Masa unidades
interface Masa{
    
    //Unidad principal
    kilogramo: number;

    //Submultiplos
    gramo: number;
    miligramo: number;
    microgramo: number;

    //Multiplos
    tonelada: number;
}
