import React from 'react'
import { useForm } from 'react-hook-form'

const Fomm = () => {
    const {register , handleSubmit} = useForm()


    const onsubmit = (data) =>{
        console.log(data)
    }


  return (
    <div className='m-4 flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold'>Form Submit</h1>

      <form className='mt-4 flex flex-col gap-3 w-64' onClick={handleSubmit(onsubmit)}>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          id='firstName'
          {...register("firstName")}
          placeholder='Enter first name'
          className='border p-2 rounded'
        />

        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          id='lastName'
          {...register("lastname")}
          placeholder='Enter last name'
          className='border p-2 rounded'
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          {...register("email")}
          placeholder='Enter email'
          className='border p-2 rounded'
        />

        <label htmlFor='phone'>Phone</label>
        <input
          type='tel'
          id='phone'
          {...register("phones")}
          placeholder='Enter phone number'
          className='border p-2 rounded'
        />

        {/* <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          placeholder='Enter password'
          className='border p-2 rounded'
        /> */}

        <button
          type='submit'
          className='bg-blue-500 text-white p-2 rounded mt-2'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Fomm