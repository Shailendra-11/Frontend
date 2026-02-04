import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseLayoutHookas = () => {
    const [bg, setBg] = useState('bg-white') // default Tailwind background

    // Change body class whenever bg changes
    useLayoutEffect(() => {
        // Remove previous bg classes
        console.log("useLayoutEffect")
        document.body.classList.remove('bg-white', 'bg-indigo-500', 'bg-green-500', 'bg-red-500')
        // Add new bg class
        document.body.classList.add(bg)
    }, [bg])



    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Change Background</h1>
            <div className="flex gap-4">
                <button
                    onClick={() => setBg('bg-white')}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                    White
                </button>
                <button
                    onClick={() => setBg('bg-indigo-500')}
                    className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                >
                    Indigo
                </button>
                <button
                    onClick={() => setBg('bg-green-500')}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Green
                </button>
                <button
                    onClick={() => setBg('bg-red-500')}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Red
                </button>
            </div>
        </div>
    )
}

export default UseLayoutHookas
