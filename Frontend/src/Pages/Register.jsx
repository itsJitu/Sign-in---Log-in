import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {

   const [data, setData ] = useState({
    name: "",
    email: "",
    password: "",
   });

  const registerUser = (e) => {
    e.preventDefault()
  }

  return (
    <>
    <div>
      <form onSubmit={registerUser}>

        <lable>Name</lable>
        <input 
        type="text" 
        placeholder='Enter Name' 
        value={ data.name } 
        onChange={(e) => setData({...data, name: e.target.value})} 
        />

        <lable>Email</lable>
        <input 
        type="email" 
        placeholder='Enter Email-id' 
        value={ data.email } 
        onChange={(e) => setData({...data, email: e.target.value})} 
        / >

        <label>Password</label>
        <input 
        type='text' 
        placeholder='Enter a Password' 
        value={ data.password } 
        onChange={(e) => setData({...data, Password: e.target.value})} 
        />

      </form>

      <div>
        <button type="submit">Submit</button>
      </div>

      <Link to="/Login">Already have an Account. Login</Link>
    </div>
    </>
  );
}

export default Register
