const { useState } = require("react");

function  Counter () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Has clickeado {count} veces</p>
            <button onClick={() => setCount(count + 1)}>
                click me
            </button>
            
        </div>
    )
}

export default Counter;