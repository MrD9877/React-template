import React from 'react'

export default function RestartBtn(props) {
    return (
        <button type="button" onClick={() => props.handleBtn("reset")} className='mx-2'>
            <lord-icon
                src="https://cdn.lordicon.com/rsbokaso.json"
                trigger="hover"
            >
            </lord-icon>
        </button>
    )
}
