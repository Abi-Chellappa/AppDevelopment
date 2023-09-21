import React from 'react'
import Sidebar from '../Bar/Sidebar';
import './Home.css';
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
    <Sidebar/>
    <section className='home' id="home">
         <div className='content'>
         <h3>enjoy the wonderful<br/>
         advanthure of the <br/> animels</h3>
         <button className='buthome'><Link to='/login'>Explore</Link></button>
        </div>
    </section>
   
    <section id="sellers">
    <div className="seller container">
      
      <h2>FAMOUS FOREST</h2>
      <div className="best-seller">
        
        <div className="best-p1">
          <img src="https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>The Amazon Rainforest is primarily located in South America.</p>
            </div>
          </div>
        </div>
        
        <div className="best-p1">
          <img src="https://img.ev.mu/images/attractions/2811/960x640/3952.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Białowieża Forest located in Eastern Europe.</p>
            </div>
          </div>
        </div>
        
        <div className="best-p1">
          <img src="https://piratediffusion1.s3.amazonaws.com/renders2/EDm2W4/00001-runpod-pro-62665715.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Ancient forests are shaped by natural processes like fire, disease.</p>
            </div>
          </div>
        </div>
        
        <div className="best-p1">
          <img src="https://media.istockphoto.com/id/1303463239/video/mysterious-path-inside-majestic-bialowieza-forest-oldest-forest-in-europe.jpg?s=640x640&k=20&c=d3Wupdgc_cq5bIWEZPN0q9L7jmw4OGGOAVutjC6Pcbs=" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Tongass National Forest is the largest forest in the United States</p>
            </div>
          </div>
        </div>
      
        </div>
    </div>
  </section>
   
    

    <div className='footfull'>
    <footer>
   
        <div className='footer-col'>
          <h4>Resoures</h4>
          <ul>
              <li><Link to='#'><span className='fp'>Application</span></Link></li>
              <li><Link to='#'><span className='fp'>Documentation</span></Link></li>
              <li><Link to='#'><span className='fp'>FAQ</span></Link></li>
             
          </ul>
        </div>
        <div className='footer-col'>
          <h4>Project</h4>
          <ul>
              <li><a href='#'>place</a></li>
              <li><Link to='/animel'>Animels</Link></li>
              <li><Link to='/video'>Videos</Link></li>
              <li><Link to='/image'>Images</Link></li>
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
             <Link to='#'><span className='sicon'><AiIcons.AiFillFacebook/></span></Link>
             <Link to='#'><span className='sicon'><BsIcons.BsInstagram/></span></Link>
             <Link to='#'><span className='sicon'><AiIcons.AiOutlineLinkedin/></span></Link>
             <Link to='#'><span className='sicon'><BsIcons.BsTwitter/></span></Link>
          </div>
        </div>
    </footer>
    </div>
    </div>
  )
}
