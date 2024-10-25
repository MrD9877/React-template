import React, { memo, useEffect } from 'react'

function PostData({ url, data, setError, submit, SetResponse }) {
    const postData = async () => {
        try {
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                credentials: "include",
                headers: new Headers({
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000/',
                    'Content-Type': 'application/json',
                })
            })
            if (!res.ok) {
                setError(res.status)
            } else {
                const resjson = res.json()
                SetResponse(resjson.message)
            }

        } catch (err) {
            setError(err.message)
        }
    }
    useEffect(() => {
        if (submit) {
            postData()
        }
    }, [submit])
    return (
        <div>
        </div>
    )
}
export default memo(PostData)