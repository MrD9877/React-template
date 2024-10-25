// in props need startTimer to work 
import React, { useEffect, useState } from 'react'

export default function Timer({ startTimer, reset, setReset }) {
    const [seconds, setSeconds] = useState(0)
    const [intervalId, setIntervalId] = useState()
    useEffect(() => {

        if (startTimer) {
            clearInterval(intervalId)
            setIntervalId(setInterval(() => setSeconds((pre) => pre + 1), 1000))
        }
        if (!startTimer) {
            clearInterval(intervalId)
            setIntervalId()
        }
        if (reset) {
            setReset(false)
            setSeconds(0)
        }
    }, [startTimer, reset])
    return (
        <>
            {seconds}
        </>
    )
}
