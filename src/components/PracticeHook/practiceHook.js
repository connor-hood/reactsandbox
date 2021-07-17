import React, { useState } from 'react';

const PracticeHook = () => {
    const [count, setCount] = useState(4)
    const [theme, setTheme] = useState('Blue')
    const [name, setName] = useState('')

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount () {
        setCount(prevCount => prevCount + 1)
        setTheme('red')
    }
    return ( 
        <div>
            <div>
                <p>useState example</p>
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <span>{theme}</span>
                <button onClick={incrementCount}>+</button>
            </div>
            <div>
                <p>Custom example?</p>
                <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                />
            </div>
        </div>
     );
}
 
export default PracticeHook;