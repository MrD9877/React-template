import React, { useEffect, useState } from 'react';

const TimerComponent = () => {
    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);
    let intervalId = null;

    useEffect(() => {
        if (isActive) {
            intervalId = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
        }

        // Cleanup function to clear the interval when the component unmounts or when isActive changes
        return () => {
            clearInterval(intervalId);
        };
    }, [isActive]);

    const startInterval = () => {
        setIsActive(true);
    };

    const stopInterval = () => {
        setIsActive(false);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={startInterval}>Start</button>
            <button onClick={stopInterval}>Stop</button>
        </div>
    );
};

export default TimerComponent;
