import React, { useDeferredValue, useMemo } from 'react'

export default function NestedComponent({ input }) {
    const difvalue = useDeferredValue(input)
    const list = useMemo(() => {
        let l = []
        for (let i = 0; i < 10000; i++) {
            l.push(<div key={i}>{difvalue}</div>)
        }
        return l
    }, [difvalue])
    return list
}
