import React, { useEffect, useState } from 'react';
import './Images.css';
import Sidebar from '../Bar/Sidebar';
import axios from 'axios';
import ReactPlayer from 'react-player/lazy';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Images2() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/auth/getVideo2")
      .then((response) => {
        // Filter the videos based on the 'type' attribute
        const filteredVideos2 = response.data.filter((image) => image.type === 'image');
        setImages(filteredVideos2);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Sidebar />
      <div className='imagefull'>
         <br/>
        
        <ul>
          <Carousel className='imageslide'>
          {images.map((image) => (
              
             
          <div className>
                <li key={image.id}>
           <img src={image.url} height="500px" width="500px"/>
            </li>
          </div>
           
           ))}
           </Carousel>
        </ul>
      </div>
    </div>
  );
}
