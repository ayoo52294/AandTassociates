import "./index.css";
import Hero1 from "./Hero1/Hero1";
import ContactUs from "./Contact/Contact";
import About from "./About/About";
import Header from './Header/Fixed-Navbar';
import FaqSection from "./Faq/faq";
import Footer from "./footer/footer";
import  Workflows from "./services/services";
import MeetTheVisionaries from "./Founders/founders";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      // once: true, 
      easing: 'ease-out-cubic', 
      offset: 100,  
    });
  }, []);
  return (

    <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip ">
      <Header/>
      <Hero1 />
      <About/>
      <Workflows/>
      <MeetTheVisionaries />
      <FaqSection />
      <ContactUs />
      <Footer />
  
    </div>


  );
}

export default App;
