import React, { useEffect } from 'react';
import Sidebar from '../Bar/Sidebar';
import './Place.css';
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';


export default function TamilNadu() {
  
  useEffect(() => {
    const handleNextClick = () => {
      const items = document.querySelectorAll('.placeitem');
      const slide = document.querySelector('.placeslide');
      slide.appendChild(items[0]);
    };

    const handlePrevClick = () => {
      const items = document.querySelectorAll('.placeitem');
      const slide = document.querySelector('.placeslide');
      slide.prepend(items[items.length - 1]);
    };

    // Attach event listeners to your React component's buttons
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    nextButton.addEventListener('click', handleNextClick);
    prevButton.addEventListener('click', handlePrevClick);

    // Clean up event listeners when the component unmounts
    return () => {
      nextButton.removeEventListener('click', handleNextClick);
      prevButton.removeEventListener('click', handlePrevClick);
    };
  }, []);
  return (
    <div>
    
    <Sidebar/>
    <div className='placebody'>
       <div className='placecontainer'>
          
          <div className='placeslide'>
            
             <div className='placeitem' style={{ backgroundImage: 'url(https://getwallpapers.com/wallpaper/full/7/7/a/1074550-enchanted-forest-background-2880x1620-for-android.jpg)' }}>
               <div className='placecontent'>
                  <div className='placehead'>Mudumalai National Park</div>
                  <div className='placedes'>Located in the Nilgiri Hills, Mudumalai is one of the most well-known wildlife sanctuaries in Tamil Nadu. It is part of the larger Nilgiri Biosphere Reserve and is home to a wide variety of wildlife, including elephants, tigers, leopards, and numerous bird species.</div>
                  <button>See <Link to='/animel'>animals</Link> <Link to='/image'>images</Link> <Link to='/video'>videos</Link></button>
                  </div>
              </div>
             <div className='placeitem' style={{ backgroundImage: 'url(https://cdn.britannica.com/21/142721-050-297E13B0/Biligiri-Rangan-Hills-Biligiriranga-Swamy-Temple-Wildlife.jpg)' }}>
               <div className='placecontent'>
                  <div className='placehead'>Mudumalai National Park</div>
                  <div className='placedes'> Located in the Nilgiri Hills, Mudumalai is one of the most well-known wildlife sanctuaries in Tamil Nadu. It is part of the larger Nilgiri Biosphere Reserve and is home to a wide variety of wildlife, including elephants, tigers, leopards, and numerous bird species.</div>
                  <button>See <Link to='/mudumalai'>more</Link> <Link to='/animel'>animals</Link> <Link to='/image'>images</Link> <Link to='/video'>videos</Link></button>
                  </div>
              </div>
             <div className='placeitem' style={{ backgroundImage: 'url(https://cutewallpaper.org/21/forest-backgrounds/Forest-Backgrounds-Nice-Forest-Image-20254.jpg)' }}>
               <div className='placecontent'>
                  <div className='placehead'>Anamalai Tiger Reserve </div>
                  <div className='placedes'>The Anamalai Tiger Reserve, located in the western part of Tamil Nadu and the southern part of Kerala in southern India. Covering an extensive expanse of approximately 958 square kilometers, it is part of the Western Ghats, a UNESCO World Heritage Site and one of the world's biodiversity hotspots. </div>
                  <button>See <Link to='/anamali'>more </Link><Link to='/animel'>animals</Link> <Link to='/image2'>images</Link> <Link to='/video2'>videos</Link></button>
                  </div>
              </div>
              <div className='placeitem' style={{ backgroundImage: 'url(https://img2.wallspic.com/previews/2/5/4/4452/4452-nature_reserve-mountains-wilderness-sky-nature-x750.jpg)' }}>
              <div className='placecontent'>
              <div className='placehead'>Riverine <br/>Forests</div>
              <div className='placedes'>Riverine Forests is located in the Uttar Pradesh.
              The state has riverine forests along the banks of major rivers like the Ganges and Yamuna.
              These forests are adapted to periodic flooding and support unique ecosystems.</div>
              <button>See <Link to='/animel'>animals</Link> <Link to='/image'>images</Link> <Link to='/video'>videos</Link></button>
              </div>
              </div>
              <div className='placeitem' style={{ backgroundImage: 'url(https://a-static.besthdwallpaper.com/beautiful-forest-landscape-wallpaper-1680x1260-11537_24.jpg)' }}>
              <div className='placecontent'>
              <div className='placehead'>Chuka Wildlife Sanctuary</div>
              <div className='placedes'>Chuka Wildlife Sanctuary is located in the Sonbhadra district of Uttar Pradesh.
              These area Approximately 50 square kilometers.
              Chuka Wildlife Sanctuary is known for its lush forests and diverse wildlife, including leopards, sloth bears, sambar deer, and a variety of avian species.</div>
              <button>See <Link to='/animel'><span className='ani'>animals</span></Link> <Link to='/image'>images</Link> <Link to='/video'>videos</Link></button>
              </div>
              </div>
              <div className='placeitem' style={{ backgroundImage: 'url(https://4kwallpapers.com/images/wallpapers/forest-sunlight-tree-branches-path-fallen-leaves-woods-4480x2520-3516.jpg)' }}>
               <div className='placecontent'>
                  <div className='placehead'>Jim Corbett National Park</div>
                  <div className='placedes'>Jim Corbett National Park spans across Uttarakhand and Uttar Pradesh and is named after the famous British hunter and conservationist Jim Corbett.
                  The park is known for its tiger population and is a popular destination for wildlife enthusiasts and tourists.
                  </div>
                  <button>See <Link to='/animel'>animals</Link> <Link to='/image'>images</Link> <Link to='/video'>videos</Link></button>
                </div>
              </div>

          </div>
            
          <div className='buttonswipe'>
              <button className='prev'><AiIcons.AiOutlineArrowLeft/></button>
              <button className='next'><AiIcons.AiOutlineArrowRight/></button>
          </div>
        </div>
          
          </div>
    </div>
  )
}
