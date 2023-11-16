import React ,{useState,useEffect} from 'react';
import './Video.css';
import Sidebar from '../Bar/Sidebar';
import './Amazon.css';
import './Images.css';

import Images from './Images';
import Video from './Videos';
import Animel from './Animel';
import Video2 from './Video2';
import axios from 'axios';
import ReactPlayer from 'react-player/lazy';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AmazonAnimel from './AmazonAnimel';
import Footer from '../Bar/Footer';

export default function Mudumalai() {
  
    const [videos, setVideos] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8080/auth/getVideo3")
        .then((response) => {
          // Filter the videos based on the 'type' attribute
          const filteredVideos = response.data.filter((video) => video.type === 'video');
          setVideos(filteredVideos);
        })
        .catch((error) => {
          console.error(error);
        });
        axios.get("http://localhost:8080/auth/getVideo")
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
        <Sidebar/>
       <div className='amazonfull'>
        <div className='amazonhead'>
        <h2>Mudumalai National Park</h2>
        </div>
           <div className='amazonimg'>
            <img src='https://cdn.britannica.com/21/142721-050-297E13B0/Biligiri-Rangan-Hills-Biligiriranga-Swamy-Temple-Wildlife.jpg' height="500px" width="1217px"/>
           </div>
           <div className='amazoncontent'>
            <p>Mudumalai National Park, located in the southern state of Tamil Nadu in India, is a prominent and picturesque wildlife sanctuary that is part of the larger Nilgiri Biosphere Reserve. Encompassing an area of approximately 321 square kilometers, this park is celebrated for its lush forests, diverse wildlife, and captivating landscapes.</p><br/>
                 <p>The park's terrain varies from tropical moist deciduous forests to dry thorn forests, providing a diverse range of habitats for its numerous animal and plant species. Mudumalai National Park is renowned for its population of elephants, and it is not uncommon to encounter these gentle giants during a visit. The park is also home to other fascinating wildlife, including tigers, leopards, Indian bison (gaur), sambar deer, and several bird species.</p>
                 <br/>
            <p>
            Mudumalai's scenic beauty is further enhanced by the Moyar River that meanders through the park, adding a tranquil and picturesque element to the landscape. The park's diverse flora includes teak, bamboo, and various types of grasses, providing sustenance and shelter for the resident wildlife.
            </p>
           </div>
           <br/><br/>
           <div className='animalrect'><h3>Mudumalai National Park Animels</h3></div>
          <AmazonAnimel/><br/>
           <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
           <div className='animalrect'><h3>Mudumalai National Park Videos</h3></div>
           <div className='amazonvideocontainer'>
           <div className='amazonVideo'>

           <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ZNdalLKd2Vo"
                controls={true}
                width="920px"
                height="560px"
              />
              <br />
            </li>
          ))}
        </ul>
           </div>
           </div><br/>
           <div className='animalrect'><h3>Mudumalai National Park Images</h3></div>
           <div className='animelimage'>

           <div className='imagecontainer'>
        <ul>
          <Carousel className='imageslide'>
          {images.map((image) => (
          <div className>
                <li key={image.id}>
           <img src={image.url} height="560px" width="560px"/>
            </li>
          </div>
          ))}
           </Carousel>
        </ul>
      </div>
           </div>
       </div>
       <br/><br/>
       <Footer/>
    </div>
  )
}
