import React, { useState, useEffect } from 'react';

export default function PracticeEffectHook() {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])

    // every time we click on a post, useEffect runs when the values inside the array get changed, [] would be onMount
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])

    return (
        <div>
            <div>
            <button onClick={() => setResourceType('posts')}>posts</button>
            <button onClick={() => setResourceType('users')}>users</button>
            <button onClick={() => setResourceType('comments')}>comments</button>
            </div>
            <h1>{resourceType}</h1>
            {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </div>
    )
}