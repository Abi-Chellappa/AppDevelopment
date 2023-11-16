import React from "react"
import Sidebar from '../Bar/Sidebar';
import './Lion.css';
import ReactPlayer from "react-player";
import Footer from "../Bar/Footer";
export default function Tiger()
{
    return(
       <div>
           <Sidebar/>
           <div className="lionfull">
               <div className="lioncontainer">
                <div className="lionimagerect">
                    <div className="lionimg">
                       <img src="https://i.pinimg.com/236x/90/6a/3f/906a3f7b2b22b62ad4a9c057214eae25.jpg" height={600} width={420}/>
                    </div>
                       <img src="https://i.pinimg.com/564x/dc/64/ac/dc64ac715d5fd4bfe6cbd4f8b24a05f3.jpg"height={400} width={420}/>
                </div>
                <div className="lioncontent">
                   <div className="rectangle1">
                    <h1>Tiger</h1>
                   </div>
                  
                   <div className="rectangle2">
                    <p>The tiger, scientifically known as Panthera tigris, stands as one of the most magnificent 
                        and powerful big cats on Earth. Renowned for its striking orange coat adorned with dark stripes, 
                        the tiger possesses a combination of strength, agility, and predatory prowess. </p>
                   <h4>Physical Characteristics:</h4>
                   <p><span><b>Size: </b></span>Tigers vary in size among subspecies. The Siberian, or Amur, tiger is the largest, with males weighing up to 900 pounds (410 kg) or more,
                    while the smaller Sumatran tiger weighs around 300 pounds (136 kg).</p>
                   <p>
                   <span><b>Paws and Claws:</b></span>  Tigers have powerful limbs and large paws equipped with retractable claws. 
                   Their sharp claws and strong forelimbs are essential for hunting and climbing.
                   </p>

                   <h4>Habitat and Range:</h4>
                   <p>
                   Tigers are highly adaptable and can inhabit a range of ecosystems, including tropical rainforests, grasslands, and mangrove swamps.
                   </p>
                   <p>
                   Historically, tigers occupied a vast geographic range across Asia, from the Russian Far East to the Indian subcontinent. 
                   However, due to habitat loss and human encroachment, their current distribution is fragmented.
                   </p>
                   <h4>Behavior and Social Structure:</h4>
                   <p>
                   Tigers are generally solitary creatures, with each individual establishing and defending its territory. 
                  
                   </p>
                   <p>
                   They are known for their stealth and agility, 
                   often relying on ambush techniques to capture prey. Tigers are powerful hunters, capable of taking down large herbivores.
                   </p>
                   </div>
                </div>
               </div>
               <div className="videocontainer">
               <div className="lionvideo">
               <ReactPlayer
                url="https://www.youtube.com/watch?v=DOuRH-8OoXo"
                controls={true}
                width="1108px"
                height="477px"
              />
             
               </div>
               </div>
           </div>
           <br/>
           <Footer/>
       </div>
    )
}