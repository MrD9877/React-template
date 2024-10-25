import React from 'react'
import FechData from '../components/FechData'
import { useState } from 'react';
import Loading from '../components/Loading.js';

export default function DisplayFechData() {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    return (
        <div>
            <FechData url="https://catfact.ninja/fact" setData={setData} showData={data.fact} setError={setError} setLoading={setLoading} />
            {loading ? (
                <Loading />
            ) : error ? (
                <p>{error}</p>
            ) : (
                <p>
                    {data.fact}
                </p>
            )
            }
        </div>
    )
}
