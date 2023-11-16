import React,{useState,useEffect}from "react"
import './Video.css';
import Sidebar from '../Bar/Sidebar';
import './Amazon.css';

import Video from './Videos';
import Animel from './Animel';
import Video2 from './Video2';
import axios from 'axios';
import ReactPlayer from 'react-player/lazy';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Images2 from "./Image2";
import Footer from "../Bar/Footer";
import InsideAnimal from "./InsideAnimal";

export default function Anamalai()
{
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
    return(
       <div>
          <Sidebar/>
       <div className='amazonfull'>
        <div className='amazonhead'>
            <br/>
        <h2>Anamalai Tiger Reserve</h2>
        </div>
           <div className='amazonimg'>
            <img src='https://cutewallpaper.org/21/forest-backgrounds/Forest-Backgrounds-Nice-Forest-Image-20254.jpg' height="500px" width="1217px"/>
           </div>
           <div className='amazoncontent'>
            <p>The Anamalai Tiger Reserve, nestled in the Western Ghats of southern India, is an ecologically significant and biologically diverse protected area that spans across the states of Tamil Nadu and Kerala. Covering an expansive area of approximately 958 square kilometers, it is a crucial sanctuary for the conservation of wildlife and the preservation of the region's pristine natural beauty.
                </p><br/>
           <p>
           Anamalai Tiger Reserve is renowned for its rich biodiversity, and it serves as an important habitat for a variety of flora and fauna. It is home to a substantial population of Bengal tigers, making it a significant site for tiger conservation. The reserve is also inhabited by other prominent wildlife species, including Indian elephants, leopards, Indian bison (gaur), and the endangered lion-tailed macaque.


</p>
                 <br/>
            <p>
            Anamalai Tiger Reserve is not only a sanctuary for wildlife but also an essential ecological component within the Nilgiri Biosphere Reserve. The reserve offers opportunities for eco-tourism, including wildlife safaris, trekking, and birdwatching, allowing visitors to immerse themselves in the stunning natural surroundings and witness the rich biodiversity of the Western Ghats.
            </p>
           </div>
           <br/><br/>
           <div className='animalrect'><h3>Anamalai Tiger Reserve Animels</h3></div>
           <InsideAnimal/><br/>
           <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
           <div className='animalrect'><h3>Anamalai Tiger Reserve Videos</h3></div>
           <div className='amazonvideocontainer'>
           <div className='amazonVideo'>

           <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=14U5IE03lFY"
                controls={true}
                width="920px"
                height="560px"
              />
              <br />
            </li>
          ))}
        </ul>
           </div>
           </div>
        <br/>
           <div className='animalrect'><h3>Anamalai Tiger Reserve Images</h3></div>
           
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
       <br/><br/>
       <Footer/>
       </div>
    )
}