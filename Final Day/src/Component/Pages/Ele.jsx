import React from "react"
import Sidebar from '../Bar/Sidebar';
import './Lion.css';
import ReactPlayer from "react-player";
import Footer from "../Bar/Footer";
export default function Ele()
{
    return(
       <div>
           <Sidebar/>
           <div className="lionfull">
               <div className="lioncontainer">
                <div className="lionimagerect">
                    <div className="lionimg">
                       <img src="https://i.pinimg.com/564x/90/d6/85/90d685d90e03bb04888ab3a8aa55773f.jpg" height={600} width={420}/>
                    </div>
                       <img src="https://i.pinimg.com/564x/7b/91/cf/7b91cfe08bf68b64c663b083b7494276.jpg"height={400} width={420}/>
                </div>
                <div className="lioncontent">
                   <div className="rectangle1">
                    <h1>Elephant</h1>
                   </div>
                  
                   <div className="rectangle2">
                    <p>The elephant, a magnificent and highly intelligent creature, stands as one of the largest and most iconic mammals on Earth. With a distinctively elongated trunk, 
                        large flapping ears, and, in some species, impressive tusks, elephants command attention and reverence. </p>
                   <h4>Physical Characteristics:</h4>
                   <p><span><b>Size: </b></span> Elephants are the largest land animals. African elephants are larger than Asian elephants. 
                   Adult elephants can weigh anywhere from a few thousand to more than ten thousand pounds.</p>
                   <p>
                   <span><b>Trunk: </b></span> 
                    One of the most iconic features of an elephant is its long trunk, which is actually an extended nose and upper lip. 
                   The trunk is a versatile tool used for breathing, smelling, drinking, grasping objects, and communication.
                   </p>
                   <h4>Habitat and Diet:</h4>
                   <p>
                   <span><b>Habitat: </b></span>  Elephants inhabit a variety of environments, 
                   including savannas, forests, and grasslands, depending on the species.
                   </p>
                   <p>
                   <span><b>Diet: </b></span>They are herbivores with a
                    diverse diet that includes grasses, leaves, bark, fruits, and even woody plants.
                   </p>
                   <h4>Behavior and Social Structure:</h4>
                   <p>
                   <span><b>Social Groups: </b></span>Elephants are highly social animals, living in close-knit family groups led by a matriarch, usually the oldest and most
                    experienced female. 
                   </p>
                   <p>
                   <span><b>Communication: </b></span>Elephants communicate through a 
                   range of vocalizations, body language, and infrasound, which is sound at frequencies below the human hearing range.
                   </p>
                   </div>
                </div>
               </div>
               <div className="videocontainer">
               <div className="lionvideo">
               <ReactPlayer
                url="https://www.youtube.com/watch?v=AA0UZVXJd2o"
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