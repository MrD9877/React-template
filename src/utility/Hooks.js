import React, { useEffect, useState, experimental_useEffectEvent } from 'react'

export default function Hooks() {
    const [url, setUrl] = useState("")
    const [cart, setCart] = useState([])

    const addItem = () => {
        let items = cart
        items.push("item")
        setCart(items)
    }
    const onUrlchange = experimental_useEffectEvent((url) => {
        console.log(`on ${url}${cart}`)
    })

    useEffect(() => {
        onUrlchange(url)
    }, [url])
    return (
        <div>
            <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" />
            <button onClick={addItem}>add item</button>
        </div>
    )
}
