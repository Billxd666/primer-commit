import { useState } from "react"

function  Submit1 () {

    const [search, setSearch] = useState('');

    return (
        <form
            onSubmit={ev => {
            ev.preventDefault();
            setSearch(ev.target.search.value);
            }}
        >
            <input type='text' name="search"></input>
            <button type='submit'>Buscar</button>
            <p>Resultados : {search}</p>
        </form>
    )
}

export default Submit1;