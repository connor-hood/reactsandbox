import React, { useState } from 'react';

const PracticeHook = () => {
    //value in useState will be the default value
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount () {
        setCount(prevCount => prevCount + 1)
        
    }
    return ( 
        <div>
            <div>
                <p>useState example</p>
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button onClick={incrementCount}>+</button>
            </div>
           
        </div>
     );
}
 
export default PracticeHook;