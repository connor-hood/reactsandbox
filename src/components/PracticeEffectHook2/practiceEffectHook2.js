import React, { useState, useEffect } from 'react';

export default function PracticeEffectHookTwo() {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth)
  
    const handleResize = () => {
        setwindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <div>
            <p>This number will change as you resize the window</p>
           {windowWidth}
        </div>
    )
}