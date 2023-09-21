import React, { useState } from 'react'
import email_icon from '../Assets/mail.png'
import password_icon from '../Assets/password.png'

import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Sidebar from '../Bar/Sidebar';

export default function Login() 
{
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState(''); 
    const navigate=useNavigate();
    
    const formHolder =(e) =>{
        e.preventDefault();
     
    if(email.length==0 && password.length==0)
    {
      alert("Enter emailid and password")
    }
    else if(email.length===0)
    {
      alert("Enter Emailid")
    }
    else if(password.length===0)
    {
      alert("Enter Password");
    }
    else
    {
      navigate("/")
    }
       
    }
  return (
    <div className='wildlogin'> 
         
    
    <Sidebar/>
    <div className='form06'>
    <form onSubmit={formHolder}>
   
    <h1>Login</h1>
    
    <div className='email'>
    <input type='text' value={email}  placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)} /><br/>
    <img src={email_icon} className="email_icon" alt=""/>
    </div>
    
        <div className='password'>
          
        <input type='password' value={password}  placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)}></input><br/>
          <img src={password_icon} className="password_icon" alt=""/>
          </div>
          
          <p className='forgot06'>Forgot password?</p>
          <button type='submit' className='logbut06'>Login</button>
          <p className='or06'>Don't have an Acount?  <Link to="/register">Register here</Link></p>
         
         
        
          
         </form>
          
         </div>
         
        
          
     
    </div>
  )
}
