import { useState } from "react"


function Login() {

  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const userLogin = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={userLogin}>
        <label>Email-id </label>
         <input type="email" 
         placeholder='Enter an Email-id' 
         value={ data.email } 
         onChange={(e) => setData({...data, email: e.target.value})} 
         />

         <label>Password</label>
         <input type="text" 
         placeholder='Enter a Password' 
         value={ data.Password } 
         onChange={(e) => setData({...data, Password: e.target.value})} 
         />
      </form>

      <button type="submit">Login</button>
      
    </div>
  )
}

export default Login
