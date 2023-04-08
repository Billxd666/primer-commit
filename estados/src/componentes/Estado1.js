
const names = ['Bill', 'Ana'];
function Estado1(){


    {/*Se define una funcion para manejar eventos siempre que se getActiveElement. se crea antes de la declaracion de retorno llamada handleClick()*/}
    function handleClick(){
        console.log('increment like count');
    }

    return(
        <div>
            <header title="Ejemplo1"/>

            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            {/* Se crea el evento onClick, En react el evento onClick es uno de los muchos eventos posibles que se puede usar para responder la interaccion del usuario. POr ejemplo, puede usar onChange para campos de entrada o Onsubmit para formularios */}
            <button onClick={handleClick}>like</button>

        </div>
    )
}

export default Estado1;