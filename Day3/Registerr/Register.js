import React from 'react'
import './Register.css';

export default function () {
  return (
    <div className='reg'>
         <div className='rectangle071'>
         
         </div>
         <div className='rectangle072'>
             <p>Registeration</p>
             <form>
                <label>FirstName&nbsp;&nbsp;&nbsp;</label>
                <input type='text' placeholder='Enter your firstname'></input><br/>
                <label>LastName &nbsp;&nbsp;&nbsp;</label>
                <input type='text' placeholder='Enter your lastname'></input><br/>
                <label className='email07'>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type='text' placeholder='Enter your email'></input><br/>
                <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type='password' placeholder='Enter your password'></input><br/>
                
               <label className='date07'>Date of Birth</label>
               <input type='date'></input><br/>
               <label>Country&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
               <input type='text' placeholder='Enter your country'></input><br/>

               <button type='submit' className='sub07'>SUBMIT</button>
               <button type='submit' className='can07'>CANCEL</button>
             </form>
         </div>
    </div>
  )
}
