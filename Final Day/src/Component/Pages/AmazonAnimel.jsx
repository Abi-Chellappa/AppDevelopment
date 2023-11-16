import React from 'react'
import Sidebar from '../Bar/Sidebar';
import './Animel.css';
import Footer from '../Bar/Footer';

export default function AmazonAnimal() {
  return (
    <div className='ani'>
    
    <div className='acontainer'>
    
    <div className='asel'>

    <div className='acards'>
       <div className='aimg'>
            <img src='https://i.pinimg.com/564x/1b/cb/b7/1bcbb7ace9d56483f92588bd220ad8dd.jpg'  alt='Lion'/>
        </div>
        <div className='ahead'>
          <h1>Jaguar</h1>
        </div>
       <div className='ades'>
         <p><span>Category: </span> Near Threatened</p>
         <p><span>Species   : </span>Panthera onca</p>
         <p><span>Population: </span>Estimated to be in the tens of thousands. </p>
       </div>
    </div>
    <div className='acards'>
       <div className='aimg'>
            <img src='https://i.pinimg.com/564x/e8/13/fe/e813fe6f87135ded56a0ca90d2067ab5.jpg'  alt='Lion'/>
        </div>
        <div className='ahead'>
          <h1>Giant River Otter</h1>
        </div>
       <div className='ades'>
         <p><span>Category: </span>Endangered</p>
         <p><span>Species: </span>Pteronura brasiliensis</p>
         <p><span>Population: </span>Estimates range from 1,000 to 5,000 individuals </p>
       </div>
    </div>
    <div className='acards'>
    <div className='aimg'>
         <img src='https://i.pinimg.com/564x/2a/e3/10/2ae3100cdb1c602fbff2d8e8e5eeb676.jpg'  alt='Lion'/>
     </div>
     <div className='ahead'>
       <h1> Capybara</h1>
     </div>
    <div className='ades'>
      <p><span>Category: </span> Least Concern</p>
      <p><span>Species: </span>Hydrochoerus hydrochaeris</p>
      <p><span>Population: </span>population are challenging due to their widespread distribution.</p>
    </div>
 </div>
    
   
    
    </div>
    <div className='asel'>

    <div className='acards'>
    <div className='aimg'>
         <img src='https://i.pinimg.com/564x/5a/01/93/5a019335b65c3e3527edfe11eebb33fb.jpg'  alt='Lion'/>
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
    </div>
    </div>

       
    </div>
   
    
  )
}
