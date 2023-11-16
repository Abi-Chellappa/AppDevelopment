import React ,{useState,useEffect} from 'react';
import './Video.css';
import './Images.css';
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
import Footer from '../Bar/Footer';
import InsideAnimal from './InsideAnimal';

export default function Bio() {
  
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
  return (
    <div>
        <Sidebar/>
       <div className='amazonfull'>
        <div className='amazonhead'>
        <h2>Bialowieza Forest</h2>
        </div>
           <div className='amazonimg'>
            <img src='https://blog.efi.int/wp-content/uploads/2020/06/Bialowieza-Forest_lindner.jpg' height="500px" width="1217px"/>
           </div>
           <div className='amazoncontent'>
            <p>The Białowieża Forest, nestled on the border between Poland and Belarus, stands as a living 
                testament to the untamed beauty of Europe's ancient woodlands. As one of the last remaining fragments
                 of the primeval forest that once blanketed
                 the continent, Białowieża holds a unique and irreplaceable status in the natural heritage of Europe.</p><br/>
            <p>
            Recognizing its ecological significance and the preservation of rare and ancient ecosystems, Białowieża Forest was rightfully designated as a UNESCO World Heritage Site in 1979. The forest is carefully managed, with strict nature reserves and national parks set aside
             to allow natural processes and evolutionary dynamics to unfold undisturbed.</p>
                 <br/>
            <p>Walking through Białowieża is like stepping back in time, surrounded by ancient trees that have witnessed centuries of history.
                 The gnarled branches and weathered trunks tell tales of a
                  bygone era when such primeval landscapes were commonplace.Beyond its ecological importance, 
                  Białowieża Forest holds cultural and historical significance. It has been a royal hunting ground for centuries, 
                  with remnants of lodges and palaces evoking a sense of the forest's rich past.
            </p>
           </div>
           <br/><br/>
           <div className='animalrect'><h3>Bialowieza Forest Animels</h3></div>
          <InsideAnimal/><br/>
           <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
           <div className='animalrect'><h3>Bialowieza Forest Videos</h3></div>
           <div className='amazonvideocontainer'>
           <div className='amazonVideo'>

           <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=eO7QkUBrzGs"
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
           <div className='animalrect'><h3>Bialowieza Forest Images</h3></div>
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
       <br/><br/><br/>
       <Footer/>
    </div>
  )
}
