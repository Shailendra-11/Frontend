import React, { useMemo, useState } from 'react'

function UseMemoHooks() {
    const [incerment, setIncerment] = useState(0)
    const [first, setFirst] = useState(0)

    // Heavy calculation runs only when `first` changes
    const calculatedValue = useMemo(() => {
        console.log("Running heavy calculation...")
        let result = 0
        for (let i = 0; i < 12000; i++) {
            result += i
        }
        return first + 2 // return computed value
    }, [first])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
                <h1 className="text-2xl font-bold text-indigo-600 mb-4">Counter</h1>
                <p className="text-lg mb-4">{incerment}</p>
                <div className="flex flex-row justify-between">
                    <button
                        onClick={() => setIncerment((prev) => prev + 1)}
                        className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                    >
                        Increase
                    </button>
                    <button
                        onClick={() =>
                            setIncerment((prev) => {
                                if (prev <= 0) {
                                    alert("Zero is the lowest, cannot decrement further");
                                    return prev;
                                } else {
                                    return prev - 1;
                                }
                            })
                        }
                        className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                    >
                        Decrement
                    </button>
                </div>

                {/* input for first */}
                <div className="mt-4">
                    <input
                        type="number"
                        value={first}
                        placeholder="Enter a value"
                        onChange={(e) => setFirst(Number(e.target.value))}
                        className="border p-2 rounded"
                    />
                </div>

                {/* show memoized value */}
                <p className="mt-2 text-indigo-700 font-semibold">
                    Memoized Value: {calculatedValue}
                </p>
            </div>
        </div>
    )
}

export default UseMemoHooks
