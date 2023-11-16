import React from "react"
import './Footer.css'
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
export default function Footer()
{
    return(
        <div className='footfull'>
        <footer>
       
            <div className='footer-col'>
              <h4>Quick Links</h4>
              <ul>
                  <li><Link to='/pp'><span className='fp'>Privacy policy</span></Link></li>
                  <li><Link to='/tc'><span className='fp'>Terms and Condition</span></Link></li>
                  <li><Link to='/feedback'><span className='fp'>Feed Back</span></Link></li>
                  <li><Link to='/faq'><span className='fp'>FAQ</span></Link></li>
                 
              </ul>
            </div>
            <div className='footer-col'>
              <h4>Project</h4>
              <ul>
                  <li><Link to='/tamilnadu'>place</Link></li>
                  <li><Link to='/animel'>Animels</Link></li>
                  <li><Link to='/video2'>Videos</Link></li>
                  <li><Link to='/image2'>Images</Link></li>
              </ul>
            </div>
            <div className='footer-col'>
              <h4>Company</h4>
              <ul>
                  <li><Link to='/about'>About Us</Link></li>
                  <li><Link to='/contactus'>Contact Us</Link></li>
              </ul>
            </div>
            <div className='footer-col'>
              <h4>Follow Us</h4>
              <div className='sociellink'>
                 <Link to='https://www.facebook.com/profile.php?id=100093687843994'><span className='sicon'><AiIcons.AiFillFacebook/></span></Link>
                 <Link to='https://www.instagram.com/'><span className='sicon'><BsIcons.BsInstagram/></span></Link>
                 <Link to='https://www.linkedin.com/in/abi-chellappa-193837256/'><span className='sicon'><AiIcons.AiOutlineLinkedin/></span></Link>
                 <Link to='https://twitter.com/'><span className='sicon'><BsIcons.BsTwitter/></span></Link>
              </div>
            </div>
        </footer>
        </div>
    )
}