import React, { useState } from 'react'
import email_icon from '../Assets/mail.png'
import password_icon from '../Assets/password.png'

import './Login.css';


export default function Login() {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState(''); 
    
    
    const formHolder =(e) =>{
        e.preventDefault();
       
    }
  return (
    <div className='wildlogin'> 
         
    
   
    <div className='form06'>
    <form onSubmit={formHolder}>
   
    <h1>Login</h1>
    
    <div className='email'>
    <input type='text' value={email}  placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)} required/><br/>
    <img src={email_icon} className="email_icon" alt=""/>
    </div>
    
        <div className='password'>
          <input type='password' value={password}  placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)}></input><br/>
          <img src={password_icon} className="password_icon" alt=""/>
          </div>
          
          <button type='submit'>Login</button>
          </form>
          
         
          <p className='forgot06'>Forgot password?</p>
          <p className='or06'><b>or</b></p>
         
          </div>
         
         <div className='register066'>
         <p>Enter your details and start journey with us</p>
         <p className='reg'>Register</p>
         </div>
          
        
          
     
    </div>
  )
}
