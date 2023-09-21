import React from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";

import './Sidebar.css';

export default function className () {
  return (
    <div>
      <div className='full22'>
           
           <div class="navbar">
              <div class="menu">
               <ul>
                  <li><Link to='/'>HOME</Link></li>
                  <li><Link to='/about'>ABOUT</Link></li>
                  <li><Link to='/contactus'>CONTACT US</Link></li>
                  <li><Link to='/login'>LOGIN</Link></li>
                  <li><Link to='/register'>REGISTER</Link></li>
                </ul>
             </div>
          </div>
        
          
     
          <input type='checkbox' id="check"/>
          <label for="check">
          <div id='menubar'><FaIcons.FaBars/></div>
          <div id='close'><AiIcons.AiOutlineClose/></div>
          </label>
      
      
          <div className="sidebar">
            <h2>My App</h2>
            <ul>
              <li><a href="#sellers"><span className='icon'><ImIcons.ImLocation/></span>Place</a></li>
              <li><Link to="/animel"><span className='icon'><ImIcons.ImLocation/></span>Animals</Link></li>
              <li><Link to="/image"><span className='icon'><BsIcons.BsImageFill/></span>Images</Link></li>
              <li><Link to="/video"><span className='icon'><FaIcons.FaVideo/></span>Videos</Link></li>
              <li><Link to="#"><span className='icon'><BiIcons.BiLogOut/></span>Logout</Link></li>
            </ul>
          </div>

      </div>

    
    
    </div>
   
    
  )
}
