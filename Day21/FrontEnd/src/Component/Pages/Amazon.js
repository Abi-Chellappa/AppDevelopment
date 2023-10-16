import React ,{useState,useEffect} from 'react';
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
import AmazonAnimel from './AmazonAnimel';

export default function Amazon() {
  
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
  return (
    <div>
        <Sidebar/>
       <div className='amazonfull'>
        <div className='amazonhead'>
        <h2>Amazon RainForest</h2>
        </div>
           <div className='amazonimg'>
            <img src='https://images.pexels.com/photos/17290997/pexels-photo-17290997.jpeg?cs=srgb&dl=pexels-kelly-17290997.jpg&fm=jpg' height="500px" width="1217px"/>
           </div>
           <div className='amazoncontent'>
            <p>The Amazon Rainforest, sometimes called the "Amazon Jungle," is an awe-inspiring natural wonder of unparalleled scale and ecological significance. Located in the heart of South America, it spans across nine countries, with the majority of it residing in Brazil. The Amazon is Earth's largest tropical rainforest,
                 encompassing an astonishing 5.5 million square kilometers, which is roughly equivalent to two-thirds the size of the entire United States.</p><br/>
                 <p>What truly sets the Amazon Rainforest apart is its remarkable biodiversity. It is an ecological treasure trove, home to an estimated 390 billion individual trees belonging to over 16,000 species. The diversity of life extends far beyond the flora, with an astounding array of wildlife that includes elusive jaguars, agile tree-dwelling sloths, vibrantly colored macaws, and countless insects, some of which remain undiscovered by science.</p>
                 <br/>
            <p>The Amazon River, originating in the Peruvian Andes, flows through the heart of the rainforest. It is a lifeblood for the region, winding through over 6,400 kilometers (about 4,000 miles) and providing essential sustenance for the diverse ecosystems that rely on it. The river is teeming with unique aquatic creatures, including the enigmatic pink river dolphins and schools of piranhas.
            This rainforest is not only an ecological marvel but also a cultural tapestry. It is inhabited by numerous indigenous communities, each with their own languages, customs, and deep connections to the land.
            </p>
           </div>
           <br/><br/>
           <div className='animalrect'><h3>Amazon RainForest Animels</h3></div>
          <Animel/>
           <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
           <div className='animalrect'><h3>Amazon RainForest Videos</h3></div>
           <div className='amazonVideo'>
           <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <ReactPlayer
                url={video.url}
                controls={true}
                width="950px"
                height="490px"
              />
              <br />
            </li>
          ))}
        </ul>
           </div>
           <div className='animalrect'><h3>Amazon RainForest Images</h3></div>
           <div className='animelimage'>

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
    </div>
  )
}
