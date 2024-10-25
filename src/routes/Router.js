import React from 'react'
import { Routes, Route } from 'react-router-dom';


export default function Router() {
    const home = "home"
    const page2 = "page2"
    return (
        <div>
            <>
                <Routes>
                    {/* /route/home */}
                    <Route path='home' element={< home />} />
                    {/* /route/page2 */}
                    <Route path='page2' element={<page2 />} />
                </Routes>
            </>
        </div>
    )
}
