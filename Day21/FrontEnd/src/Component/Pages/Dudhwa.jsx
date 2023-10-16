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
import Images2 from "./Image2";

export default function Dudhwa()
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
        axios.get("http://localhost:8080/auth/getVideo3")
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
        <h2>DUDHWA NATIONAL PARK</h2>
        </div>
           <div className='amazonimg'>
            <img src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/frautumn_forest_tree_park-image-kybeadnq.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8dc964de6ecbebca184ac5194b4162f0)' height="500px" width="1217px"/>
           </div>
           <div className='amazoncontent'>
            <p>Dudhwa National Park, situated in the northern Indian state of Uttar Pradesh, is a captivating and biodiverse protected area that draws nature enthusiasts, wildlife photographers, and conservationists alike. Covering an extensive area of approximately 490 square kilometers, the park is known for its lush green landscapes, dense forests, and diverse flora and fauna.</p><br/>
                 <p>Dudhwa National Park is famous for its population of the Indian one-horned rhinoceros. It is one of the few places in India where these majestic creatures can be spotted in their natural habitat. The park is also home to various other wildlife species, including Bengal tigers, Indian elephants, swamp deer, and leopards. These magnificent animals roam freely within the park, creating a unique and immersive wildlife experience for visitors.

</p>
                 <br/>
            <p>
            The park's ecosystem consists of wetlands, grasslands, and dense Sal forests, making it an ideal environment for a variety of bird species. Birdwatchers can delight in the numerous avian species that inhabit the park, such as the swamp francolin, white-eyed buzzard, and the Indian skimmer.
            </p>
           </div>
           <br/><br/>
           <div className='animalrect'><h3> Dudhwa National Park Animels</h3></div>
           <Animel/>
           <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
           <div className='animalrect'><h3>Dudhwa National Park Videos</h3></div>
           <Video2/><br/>
           <div className='animalrect'><h3>Dudhwa National Park Images</h3></div>
           
          <Images2/>
       </div>
       </div>
    )
}