import React, { useState } from 'react'

const UseStateHooks = () => {
     const [incerment, setIncerment] = useState(0)
     return (
          <div>
               <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
                         <h1 className="text-2xl font-bold text-indigo-600 mb-4">Counter</h1>
                         <p className="text-lg mb-4">{incerment}</p>
                         <div className="flex flex-row justify-between ">
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
                                                  return prev - 1;
                                             } else {
                                                  alert("Zero is the lowest, cannot decrement further");
                                                  return prev;
                                             }
                                        })
                                   }
                                   className="  px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                              >
                                   decrement
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default UseStateHooks