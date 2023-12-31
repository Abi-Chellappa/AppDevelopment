import React from 'react'
import Sidebar from '../Bar/Sidebar';
import './Animel.css';

export default function Animel() {
  return (
    <div>
    <Sidebar/>
    <div className='afull'>
    <div className='acontainer'>
    
    <div className='asel'>

    <div className='acards'>
       <div className='aimg'>
            <img src='https://c4.wallpaperflare.com/wallpaper/984/487/746/african-lion-king-lion-animal-wallpaper-preview.jpg'  alt='Lion'/>
        </div>
        <div className='ahead'>
          <h1>Lion</h1>
        </div>
       <div className='ades'>
         <p><span>Category: </span> Mammal</p>
         <p><span>Species: </span>Panthera leo</p>
         <p><span>Population: </span>Approximately 20,000 to 25,000 individuals in the wild </p>
       </div>
    </div>
    <div className='acards'>
       <div className='aimg'>
            <img src='https://a-z-animals.com/media/animals/images/original/tiger2.jpg'  alt='Lion'/>
        </div>
        <div className='ahead'>
          <h1>Tiger</h1>
        </div>
       <div className='ades'>
         <p><span>Category: </span>Mammal</p>
         <p><span>Species: </span>Panthera tigris</p>
         <p><span>Population: </span>Approximately 3,900 to 4,100 individuals in the wild </p>
       </div>
    </div>
    <div className='acards'>
    <div className='aimg'>
         <img src='https://universalproperty.com/static/elephant-facts-you-may-not-know.1819cadc.jpg'  alt='Lion'/>
     </div>
     <div className='ahead'>
       <h1> Elephant</h1>
     </div>
    <div className='ades'>
      <p><span>Category: </span>Mammal</p>
      <p><span>Species: </span>Elephas maximus</p>
      <p><span>Population: </span>The Elephant population is estimated to be around 415,000 to 515,000 individuals</p>
    </div>
 </div>
    
    </div>
    <div className='asel'>

    <div className='acards'>
       <div className='aimg'>
            <img src='https://cdn.britannica.com/60/122960-050-0959F3EA/Roe-deer-antlers-buck-slovakia.jpg'  alt='Lion'/>
        </div>
        <div className='ahead'>
          <h1>Deer</h1>
        </div>
       <div className='ades'>
         <p><span>Category: </span>Mammal</p>
         <p><span>Species: </span>Panthera leo</p>
         <p><span>Population: </span>Approximately 8,000 to 15,000 individuals in the wild </p>
       </div>
    </div>
    <div className='acards'>
       <div className='aimg'>
            <img src='https://cdn.pixabay.com/photo/2016/11/29/03/28/fox-1867062_640.jpg'  alt='Lion'/>
        </div>
        <div className='ahead'>
          <h1>Fox</h1>
        </div>
       <div className='ades'>
         <p><span>Category: </span>Mammal</p>
         <p><span>Species: </span>Red Fox</p>
         <p><span>Population: </span> Approximately 10,000 to 15,000 individuals in the wild </p>
       </div>
    </div>
    <div className='acards'>
    <div className='aimg'>
         <img src='data:image/jpeg;base64,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'  alt='Lion'/>
     </div>
     <div className='ahead'>
       <h1>Panda</h1>
     </div>
    <div className='ades'>
      <p><span>Category:</span> Mammal</p>
      <p><span>Species: </span>Ailuropoda melanoleuca.</p>
      <p><span>Population: </span> The population of pandas is relatively small and endangered </p>
    </div>
 </div>
    
    </div>
    </div>

       
    </div>
    </div>
  )
}
