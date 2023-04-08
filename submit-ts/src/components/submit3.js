import { useState } from "react";

function Submit3 () {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const resultado = num1 * num2;

    return (
        <form
            onSubmit={ev=>{
                ev.preventDefault();
                setNum1(ev.target.num1.value)
                setNum2(ev.target.num2.value)
            }}
        >

            <label>Ingresa el primer numero</label>
            <input
                name='num1'
                type='text'
            />

            <label>Ingresa el segundo numero:</label>
            <input

            type='text'
            name="num2"
            />
            <button type='submit'>imprime numeros</button>
            <p>Resultados: {resultado} </p>
        </form>
    )
}

export default Submit3;