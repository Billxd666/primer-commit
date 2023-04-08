import React, { useState } from 'react';{/* Se puede usar el estado para almacenar e incrementar las veces que un usuario ha hecho click en el boton me gusta. como el siguiente ejemplo  */}

{/*useState() devuelve una matriz, y puede acceder y usar esos valores de matriz dentro de su componente usando la desestructuracion de la matriz: 
function Estado2(){
    const [] = React.useState();
}
*/}

{/*El primer elemento de la matriz es el estado value, al que puede nombrar cualquier cosa . Se recomienda nombrarlo algo descriptivo: 
function Estado2(){
    const [likes] = React.useState();
}
*/}

{/*El segundo elemento de la matriz es una funcion update valor. PUede nombrar cualquier cosa a la funcion de actualizacion pero es comun usar el prefijo set seguido del nombre de la variable de estado que se esta actualizando */}

function Estado2(){
    const [likes, setlikes] = useState(0);

    {/*Finalmente se puede llamar a la funcion de actualizacion de estado, setlikes en el componente , se agrega dentro de la handleclick funcion que se definio*/}

    function handleClick(){
       setlikes(likes +1);
    }
    return (
        <button onClick={handleClick}>likes ({likes})</button>
    )
}

export default Estado2;




