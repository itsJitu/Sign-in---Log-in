import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {

   const [name, setName ] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

  const registerUser = async (e) => {
    e.preventDefault()
    setMessage("");
    try {
      const res = await fetch("http://localhost:8080/api/v1/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          password: Number(password),
          email
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("register Succelfully")
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setMessage(data.error || "Error Something Wrong ");
      }
    } catch (err) {
      setMessage("Error:" + error.message);
    }
  };



  return (
    <>
    <div>
      <form onSubmit={registerUser}>

        <label>Name</label>
        <input 
        type="text" 
        placeholder='Enter Name' 
        value={ name } 
        onChange={e => setName( e.target.value)} 
        />

        <label>Email</label>
        <input 
        type="email" 
        placeholder='Enter Email-id' 
        value={ email } 
        onChange={e => setEmail( e.target.value)}  
        / >

        <label>Password</label>
        <input 
        type='text' 
        placeholder='Enter a Password' 
        value={ password } 
       onChange={e => setPassword( e.target.value)} 
        />

      </form>

      <div>
        <button type="submit">Submit</button>
      </div>

      <Link to="/Login">Already have an Account. Login</Link>
    </div>
    </>
)};

export default Register
