import React, { useState, useRef } from 'react';

const AutoCounter = () => {
    const [count, setCount] = useState(0);
    const intervalId = useRef(); //지역변수

    const handleStart = () => {
        intervalId.current = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);
    }

    const handleStop = () => {
        clearInterval(intervalId.current);
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={handleStart}>start</button>&nbsp;&nbsp;
            <button onClick={handleStop}>stop</button>
        </>
    )
}

export default AutoCounter;