import React from "react"
import Sidebar from '../Bar/Sidebar';
import './Lion.css';
import ReactPlayer from "react-player";
import Footer from "../Bar/Footer";
export default function Lion()
{
    return(
       <div>
           <Sidebar/>
           <div className="lionfull">
               <div className="lioncontainer">
                <div className="lionimagerect">
                    <div className="lionimg">
                       <img src="https://i.pinimg.com/564x/a0/df/dd/a0dfdd2a7bfd8babf2f4769697e7329e.jpg" height={600} width={420}/>
                    </div>
                       <img src="https://i.pinimg.com/564x/29/9c/eb/299ceb76c527bd9790ecc5d97624f884.jpg"height={400} width={420}/>
                </div>
                <div className="lioncontent">
                   <div className="rectangle1">
                    <h1>Lion</h1>
                   </div>
                  
                   <div className="rectangle2">
                    <p>The lion, scientifically known as Panthera leo, is an iconic and majestic member of the big cat family. Renowned for its regal presence and often referred to as the "king of the jungle," the lion is a large carnivorous mammal with distinctive features. Adult males boast a remarkable mane, varying in color from blond to black, adding to their majestic appearance. Lions exhibit sexual dimorphism, with males generally being larger and heavier than their female counterparts. Their short, tawny fur provides camouflage in their natural habitats, which include the grasslands, savannas, and open woodlands of Africa. 
                        Social by nature, lions form prides led by a dominant male or a coalition of males, with females being the primary hunters. </p>
                   <h4>Physical Characteristics:</h4>
                   <p><span><b>Size: </b></span>Lions are among the largest of the big cats. 
                    Adult males typically weigh between 330 to 550 pounds (150 to 250 kilograms), while females are generally smaller, weighing between 265 to 395 pounds (120 to 180 kilograms).</p>
                   <p>
                   <span><b>Mane:</b></span> One of the most distinctive features of male lions is their mane. The mane varies in color from blonde to black and provides them with a regal appearance. 
                   The color and size of the mane can be influenced by factors such as age, genetics, and environmental conditions.
                   </p>
                   <h4>Behavior and Lifestyle:</h4>
                   <p>
                   <span><b>Hunting:</b></span> While lionesses are the primary hunters in the pride, males may join in
                    for larger prey. Lions use teamwork to bring down prey, often hunting cooperatively to increase their chances of success.
                   </p>
                   <p>
                   <span><b>Roaring: </b></span>Lions are known for their powerful roars, 
                   which can be heard over long distances. Roaring serves various purposes, including communication within the pride and marking territory.
                   </p>
                   </div>
                </div>
               </div>
               <div className="videocontainer">
               <div className="lionvideo">
               <ReactPlayer
                url="https://www.youtube.com/watch?v=4dzj5rEFAdk"
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