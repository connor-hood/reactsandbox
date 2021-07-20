import React, { useState } from 'react';
import '../../App.css'

const PracticeStateHook = () => {
    //value in useState will be the default value, here it would be a 0, which is what renders on page.
    //setCount is used in the hook to manage the state
    const [count, setCount] = useState(0)

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount () {
        setCount(prevCount => prevCount + 1)
        
    }
    return ( 
        <div>
            <div className="ph_container">
                <h4>useState example</h4>
                <button className="mbutton" onClick={decrementCount}>-</button>
                <span className="numberBox">{count}</span>
                <button className="pbutton" onClick={incrementCount}>+</button>
            </div>
        </div>
     );
}
 
export default PracticeStateHook;