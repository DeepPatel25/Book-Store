import React, { useState } from 'react'

function CounterHook() {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    return (
        <div>
            Count : {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease</button>
            {/* <button onClick={() => setCount(count + 1)}> Count {count} </button> */}
        </div>
    )
}

export default CounterHook