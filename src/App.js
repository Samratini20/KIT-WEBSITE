
import AboutUs from "./website/aboutUS";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './website/homePage';
import ServicePage from './website/servicePage';
import Header from './website/header';
import Footer from "./website/footer";
import Blog from './website/blog';
import ContactUs from './website/contactUs';
import TermsConditions from './website/termsconditions';
import PrivacyPolicy from './website/privacypolicy';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App(){
    useEffect(() => {
        AOS.init(
          {
            offset:250,
            duration:400
          }
        );
      }, []);
    return (
        <div>        
            <BrowserRouter>
                <Header/>
                    <Routes>
                        <Route path='/' element={<HomePage/>} />
                        <Route path='/about' element={<AboutUs/>} />
                        <Route path='/services' element={<ServicePage/>} />
                        <Route path='/blog' element={<Blog/>} />
                        <Route path='/contact' element={<ContactUs/>} />
                        <Route path='/termsconditions' element={<TermsConditions/>} />
                        <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
                      </Routes> 
                <Footer/>  
            </BrowserRouter>        
        </div>
    );
}

export default App;