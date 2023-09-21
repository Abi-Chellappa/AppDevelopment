import React from 'react'
import Sidebar from '../Bar/Sidebar';
import './Animel.css';

export default function Animel() {
  return (
    <div>
    <Sidebar/>
    <section className='animalfull'>
           <div className='animalhead'><h1>Animals</h1></div>
           <div className='animalimage'>
                <div className='animelimg1'>
                     <div className='rectanglea1'>
                       <img src='https://i.pinimg.com/564x/a0/df/dd/a0dfdd2a7bfd8babf2f4769697e7329e.jpg' width="385px" height="480px"/>
                     </div>
                </div>
           </div>
           <div className='animalimage'>
                <div className='animelimg2'>
                     <div className='rectanglea2'>
                       <img src='https://i.pinimg.com/564x/be/78/f6/be78f66d1519e1dfb1382961ae732057.jpg' width="385px" height="480px"/>
                     </div>
                </div>
           </div>
           <div className='animalimage'>
                <div className='animelimg3'>
                     <div className='rectanglea3'>
                       <img src='https://i.pinimg.com/564x/90/d6/85/90d685d90e03bb04888ab3a8aa55773f.jpg' width="385px" height="480px"/>
                     </div>
                </div>
           </div>
           <div className='animalimage'>
                <div className='animelimg4'>
                     <div className='rectanglea4'>
                       <img src='https://i.pinimg.com/236x/90/6a/3f/906a3f7b2b22b62ad4a9c057214eae25.jpg' width="385px" height="480px"/>
                     </div>
                </div>
           </div>
           <div className='animalimage'>
                <div className='animelimg5'>
                     <div className='rectanglea5'>
                       <img src='https://i.pinimg.com/564x/ab/95/78/ab95785af2399ce9bd8658b1f6b9b1b7.jpg' width="385px" height="480px"/>
                     </div>
                </div>
           </div>
           <div className='animalimage'>
                <div className='animelimg6'>
                     <div className='rectanglea6'>
                       <img src='https://i.pinimg.com/564x/bb/53/0f/bb530f5975bb4653fce0fa81bfee04e1.jpg' width="385px" height="480px"/>
                     </div>
                </div>
  </div>
       
           </section>
    </div>
  )
}
