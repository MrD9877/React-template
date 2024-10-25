import React, { useState, useRef } from 'react';

export default function Timer3() {
    const [seconds, setSeconds] = useState(0);
    const intervalId = useRef(null);

    const startTimer = () => {
        if (intervalId.current) return;
        intervalId.current = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(intervalId.current);
        intervalId.current = null;
    };

    return (
        <>
            {seconds}
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </>
    );
}