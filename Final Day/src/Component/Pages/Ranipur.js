import React,{useState,useEffect}from "react"
import './Video.css';
import Sidebar from '../Bar/Sidebar';
import './Amazon.css';
import Images from './Images';
import Video from './Videos';
import Animel from './Animel';
import Video2 from './Video2';
import axios from 'axios';
import ReactPlayer from 'react-player/lazy';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from "../Bar/Footer";
import InsideAnimal from "./InsideAnimal";

export default function Ranipur()
{
    const [videos, setVideos] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:8080/auth/getVideo")
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
    return(
       <div>
          <Sidebar/>
       <div className='amazonfull'>
        <div className='amazonhead'>
            <br/>
        <h2>RANIPUR WILDLIFE SANCTUARY</h2>
        </div>
           <div className='amazonimg'>
            <img src='https://wallpapers.com/images/featured/forest-o8tny79q1njt8ahw.jpg' height="500px" width="1217px"/>
           </div>
           <div className='amazoncontent'>
            <p>Ranipur Wildlife Sanctuary is a pristine and biodiverse haven for flora and fauna, located in the Indian state of Uttarakhand. Spread across an area of approximately 600 square kilometers, this sanctuary is nestled within the Shivalik range of the Himalayas, offering a unique and captivating natural experience. The sanctuary is known for its lush forests, meandering streams, and rugged terrain, providing a habitat for a variety of wildlife species.</p><br/>
                 <p>Ranipur Wildlife Sanctuary is particularly renowned for its rich avian population. Bird enthusiasts flock to this sanctuary to witness the diverse avifauna that includes species like the Himalayan pied kingfisher, white-capped water redstart, and the crested serpent eagle, among others. Additionally, the sanctuary is home to various mammals such as leopards, barking deer, and wild boars.

The flora within the sanctuary comprises a mix of subtropical and temperate vegetation, with dense sal forests dominating the landscape. </p>
                 <br/>
            <p>
            The sanctuary is crisscrossed by numerous trails and walking paths, making it a favored destination for nature lovers, hikers, and eco-tourists.
            This wildlife sanctuary serves as a crucial conservation area, protecting the delicate ecological balance of the region. It offers a tranquil escape from the hustle and bustle of city life and provides an opportunity to connect with the wonders of the natural world. 
            </p>
           </div>
           <br/><br/>
           <div className='animalrect'><h3> Ranipur WildLife Santuary Animels</h3></div>
           <InsideAnimal/><br/>
           <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
           <div className='animalrect'><h3>Ranipur WildLife Santuary Videos</h3></div>
           <div className='videocontainer1'>
        {/*<h2>Ranipur Wildlife Sanctuary</h2>
        <br />*/}
        
        <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <ReactPlayer
                url={video.url}
                controls={true}
                width="911px"
                height="450px"
              />
              <br />
            </li>
          ))}
        </ul>
        </div>
        <br/>
           <div className='animalrect'><h3>Ranipur WildLife Santuary Images</h3></div>
           
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