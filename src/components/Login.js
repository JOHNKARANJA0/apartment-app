import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './context/UserContext'
import './Login.css'

export default function Login() 
{

  const {login} = useContext(UserContext)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    console.log(email, password);
    
    function handleSubmit(e){
        e.preventDefault()

        login(email, password)

    }

  return (
  <section id='login-container'>
  <div class="login-card">
    <h2>LOGIN</h2>
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" value={email || ""} onChange={(e) => setEmail(e.target.value)} required />
      
      <label>Password</label>
      <input type="password" value={password || ""} onChange={(e) => setPassword(e.target.value)} required />
      
      <button type="submit">Login</button>
    </form>
    <p>Don't have an account? <Link to="/register" class="sign-up-link">Sign Up</Link></p>
  </div>
</section>

  )
}