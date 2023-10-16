import React, { useEffect, useState } from 'react';
import './Video.css';
import Sidebar from '../Bar/Sidebar';
import axios from 'axios';
import ReactPlayer from 'react-player/lazy';

export default function Video() {
  const [videos, setVideos] = useState([]);

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
  }, []);

  return (
    <div>
      <Sidebar />
      <div className='videobody'>
        {/*<h2>Ranipur Wildlife Sanctuary</h2>
        <br />*/}
        <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <ReactPlayer
                url={video.url}
                controls={true}
                width="800px"
                height="450px"
              />
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
