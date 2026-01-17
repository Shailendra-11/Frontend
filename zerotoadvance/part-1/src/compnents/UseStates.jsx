import React, { useState } from 'react'

const UseStates = () => {
     const [userData, setUserData] = useState({
          firstname: "",
          lastname: "",
          email: "",
     })

     const handlechnage = (e) => {
          const { name, value } = e.target;
          setUserData((prev)=>({ ...prev, [name]: value }))
     }


     return (
          <div className=''>
               <h1>Form Sumbit</h1>
               <form onSubmit={(e) => {
                    e.preventDefault()
                    console.log("Form Data:", userData);
                    setUserData({
                         firstname:"",
                         lastname:"",
                         email:"",
                    })
               }}>
                    <input type='text' name="firstname" onChange={handlechnage} />
                    <br />
                    <input type='text' name="lastname" onChange={handlechnage} />
                    <br />

                    <input type='email' name="email" onChange={handlechnage} />
                    <br />
                    <br />
                    <button>Sumbit</button>
                    <br />

               </form>
          </div>
     )
}

export default UseStates