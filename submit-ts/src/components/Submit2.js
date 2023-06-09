import { useState } from "react";

function Submit2 () {
    const [age, setAge] = useState('');
    const ageAsNumber = Number(age);

    return(
        <>
            <label>Age:</label>
            <input
                value={age}
                onChange={e => setAge(e.target.value)}
                type='number'
            />
            <button onClick={() => setAge(ageAsNumber + 10)}> Add 10 years</button>
        </>
    )
}

export default Submit2;