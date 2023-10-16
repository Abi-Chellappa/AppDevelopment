
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import Sidebar from './Component/Bar/Sidebar';
import Home from './Component/Pages/Home';
import Contact from './Component/Pages/Contact';
import Animel from './Component/Pages/Animel';
import About from './Component/Pages/About';

import Videos from './Component/Pages/Videos';
import Images from './Component/Pages/Images';
import Place from './Component/Pages/Place';
import Feedback from './Component/Pages/Feedback';
import Faq from './Component/Pages/Faq';
import Privacypolicy from './Component/Pages/Privacypolicy';
import Termsandcondition from './Component/Pages/Termsandcondition';
import Video2 from './Component/Pages/Video2';
import SearchBar from './Component/Bar/SearchBar';
import Amazon from './Component/Pages/Amazon';
import Ranipur from './Component/Pages/Ranipur';
import AmazonAnimel from './Component/Pages/AmazonAnimel';
import Images2 from './Component/Pages/Image2';
import Dudhwa from './Component/Pages/Dudhwa';
import TamilNadu from './Component/Pages/TamilNadu';
import Mudumalai from './Component/Pages/Mudumalai';
import Anamalai from './Component/Pages/Anamali';
import Lion from './Component/Pages/Lion';



function App() {
  return (
    <div className="App">
        
         <BrowserRouter>
          <Routes>
             <Route path='/' element={<Login/>}/>
             <Route path='/home' element={<Home/>}/>
             <Route path='/register' element={<Register/>}/>
             <Route path='/sidebar' element={<Sidebar/>}/>
             <Route path='/contactus' element={<Contact/>}/>
             <Route path='/animel' element={<Animel/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/video' element={<Videos/>}/>
             <Route path='/video2' element={<Video2/>}/>
             <Route path='/image' element={<Images/>}/>
             <Route path='/image2' element={<Images2/>}/>
             <Route path='/uttar pradesh' element={<Place/>}/>
             <Route path='/feedback' element={<Feedback/>}/>
             <Route path='/faq' element={<Faq/>}/>
             <Route path='/pp' element={<Privacypolicy/>}/>
             <Route path='/tc' element={<Termsandcondition/>}/>
             <Route path='/searchbar' element={<SearchBar/>}/>
             <Route path='/amazon' element={<Amazon/>}/>
             <Route path='/ranipur' element={<Ranipur/>}/>
             <Route path='/amazonanimel' element={<AmazonAnimel/>}/>
             <Route path='/dudhea' element={<Dudhwa/>}/>
             <Route path='/tamilnadu' element={<TamilNadu/>}/>
             <Route path='/mudumalai' element={<Mudumalai/>}/>
             <Route path='/anamali' element={<Anamalai/>}/>
             <Route path='/lion' element={<Lion/>}/>
          </Routes>
         </BrowserRouter>
          
    </div>
  );
}

export default App;
