import React, { useState } from 'react'
import Timer from '../utility/Timer'
import RestartBtn from '../utility/RestartBtn'

export default function Timerlayout() {
    const [btnState, setBtnState] = useState(" Start")
    const [startTimer, setStartTimer] = useState(false)
    const [reset, setReset] = useState(false)

    const toggleStartStop = () => {
        startTimer ? setBtnState(" Start") : setBtnState(" Stop ");
        startTimer ? setStartTimer(false) : setStartTimer(true);
    }

    const handleBtn = (prop) => {
        if (prop === "startStopBtn") {
            toggleStartStop()
        }
        if (prop === "reset") {
            setStartTimer(false)
            setBtnState(" Start")
            setReset(true)
        }
    }
    return (
        <>
            <div className='m-auto w-60 h-40 border border-black rounded-lg flex flex-col justify-around ' style={{ background: "#424242 " }}>
                <div className='flex justify-end'>
                    <RestartBtn handleBtn={handleBtn} />
                </div>
                <div className='flex justify-center items-center pt-5' >
                    <Timer startTimer={startTimer} reset={reset} setReset={setReset} />
                </div>
                <button type="button" onClick={() => handleBtn("startStopBtn")} className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none  font-medium rounded-full text-sm px-3 w-48 py-1 text-center m-auto mb-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">{btnState}</button>
            </div>
        </>
    )
}
