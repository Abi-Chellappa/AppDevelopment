import React from 'react'
import './Contact.css';
import Sidebar from '../Bar/Sidebar';
import * as Fa6Icons from "react-icons/fa6";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
export default function Contact() {

    const[username,setUsername]=useState('');
    const[email,setEmail]=useState(''); 
    const[message,setMessage]=useState('');
    const navigate=useNavigate();
    const details={username,email,message};
   

    const formHolder =async(e) =>{
        e.preventDefault();
    
    if(username.length==0 && email.length==0)
    {
      alert("Enter emailid and password")
    }
    else
    {
      axios.post("http://localhost:8080/auth/postContact",details)
      navigate("/home");
    }
    }
 
   
  return (
    <div>
        <Sidebar/>
        <section className='contactt0'>
          <div className='content0'>
             <h1>Contact Us</h1>
          </div>
          <div className='contactdetails'>
             <div className='contactInfo'>
                 
                   <div className='contactbox'>
                     <div className='contacticon'><Fa6Icons.FaLocationDot/></div>
                     <div className='contacttext'>
                       <h3 className='h33'>Address</h3>
                       <p>4671 Sugar camp Road,<br/>Qwatonna,Midfghjk,<br/>456789</p>
                     </div>
                   </div>
                   
                    <div className='contactbox'>
                     <div className='contacticon'><BsIcons.BsFillTelephoneFill/></div>
                     <div className='contacttext'>
                       <h3>Phone</h3>
                       <p>507-475-6094</p>
                     </div>
                   </div>
                    
                   <div className='contactbox'>
                     <div className='contacticon'><AiIcons.AiOutlineMail/></div>
                     <div className='contacttext'>
                       <h3>Email</h3>
                       <p>abcd23@gmail.com</p>
                     </div>
                   </div>
                </div> 
                </div> 
                   <div className='contactform'>
                       <form onSubmit={formHolder}>
                          <h2>Send Message</h2>
                          <div className='inputbox'>
                             <input type="text" name="" value={username} onChange={(e)=>setUsername(e.target.value)} required="required"/>
                             <span>Full Name</span>
                          </div>
                          <div className='inputbox'>
                             <input type="text" name="" value={email} onChange={(e)=>setEmail(e.target.value)} required="required"/>
                             <span>Email</span>
                          </div>
                          <div className='inputbox'>
                             <textarea type="text" name="" value={message} onChange={(e)=>setMessage(e.target.value)} required="required"/>
                             <span>Type your Message....</span>
                          </div>
                          <div className='inputbox'>
                           <input type="submit" name="" value="Send"/>
                          </div>

                      
                        </form>
                   </div>
               
              
              </section>
              </div>
  )
}
