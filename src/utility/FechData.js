import React, { useEffect } from 'react'

export default function FechData({ url, setData, setLoading, setError }) {

    const fechData = async () => {
        setLoading(() => true)
        try {
            const res = await fetch(url)
            // if (!res.ok) console.log(res)
            const data = await res.json()
            setData(data)
        } catch (err) {
            setError("Fail to Fech data")
        }
        setLoading(() => false)
    }
    useEffect(() => {
        fechData()
    }, [])
    return (
        <>
        </>
    )
}
