'use client'

import { useState } from 'react'

export default function TestePage() {
    const [counter, setCounter] = useState(1);


    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        </div>
    )
}