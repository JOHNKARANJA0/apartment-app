import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './context/UserContext'
import './Register.css'


function Register() 
{

  const {register} = useContext(UserContext)



  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [repeatPassword, setRepeatPassword] = useState()
  const [name, setName] = useState()
  const [userType, setUserType] = useState()

  console.log(email, password, repeatPassword, name);
  
  function handleSubmit(e){
    e.preventDefault()

    register(name, email, userType, password)
  }


  return (
    <section id='register-container'>
    <div class="register-card">
      <h2>Register New Account</h2>
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input type="text" id="name" value={name || ""} onChange={(e) => setName(e.target.value)} required />
        
        <label for="email">Email</label>
        <input type="email" id="email" value={email || ""} onChange={(e) => setEmail(e.target.value)} required />
  
        <label for="user_type">User Type</label>
        <select id="user_type" value={userType || ""} onChange={(e) => setUserType(e.target.value)} required>
          <option value="" disabled>Select user type</option>
          <option value="Admin">Admin</option>
          <option value="Tenant">Tenant</option>
        </select>
  
        <label for="password">Password</label>
        <input type="password" id="password" value={password || ""} onChange={(e) => setPassword(e.target.value)} required />
        
        <label for="repeatPassword">Confirm Password</label>
        <input type="password" id="repeatPassword" value={repeatPassword || ""} onChange={(e) => setRepeatPassword(e.target.value)} required />
        
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <Link to="/login" class="login-link">Login</Link></p>
    </div>
  </section>
  )
}

export default Register