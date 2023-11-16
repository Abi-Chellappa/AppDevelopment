import React from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as FA6Icons from "react-icons/fa6";
import * as IOIcons from "react-icons/io";
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/userSlice';



import './Sidebar.css';
import SearchBar from './SearchBar';

export default function ClassName () {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    <div>
      <div className='full22'>
           
           <div class="navbar">
             
              <div class="menu">
               <ul>
                 <li className='side'> <SearchBar/></li>
                  <li></li>
                  <li></li>
                  <li><Link to='/home'><span className='icon'><AiIcons.AiOutlineHome/></span>&nbsp;&nbsp;HOME</Link></li>
                  <li><Link to='/about'><span className='icon'><AiIcons.AiOutlineUser/></span>&nbsp;&nbsp;ABOUT US</Link></li>
                  <li><Link to='/contactus'><span className='icon'><BsIcons.BsFillTelephoneFill/></span>&nbsp;&nbsp;CONTACT US</Link></li>
                {/*<li><Link to='/feedback'><span className='icon'><BiIcons.BiLogIn/></span>&nbsp;&nbsp;FEEDBACK</Link></li>*/}
                  <li><Link to='/'><span className='icon'><BiIcons.BiLogOut/></span>&nbsp;&nbsp;LOGOUT</Link></li>
                  <li className='username1'>
                  <span className='icon'><FA6Icons.FaRegUser/></span>&nbsp;&nbsp;
        {username}{/*<span className='icon'><IOIcons.IoIosArrowDown/></span>&nbsp;&nbsp;*/}
      
                  </li>
                 
                </ul>
             </div>
          
        
          
     
          <input type='checkbox' id="check"/>
          <label for="check">
          <div id='menubar'><FaIcons.FaBars/></div>
          <div id='close'><AiIcons.AiOutlineClose/></div>
          </label>
      
      
          <div className="sidebar">
            <h2>My App</h2>
            <ul>
              <li><Link to='/uttar pradesh'><span className='icon'><ImIcons.ImLocation/></span>Place</Link></li>
              <li><Link to="/animel"><span className='icon'><ImIcons.ImLocation/></span>Animals</Link></li>
              <li><Link to="/image"><span className='icon'><BsIcons.BsImageFill/></span>Images</Link></li>
              <li><Link to="/video"><span className='icon'><FaIcons.FaVideo/></span>Videos</Link></li>
              <li><Link to="/"><span className='icon'><BiIcons.BiLogOut/></span>Logout</Link></li>
            </ul>
          </div>

      </div>

    </div>
    
    </div>
   
    
  )
}
