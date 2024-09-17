import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from './Component/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Carousel from './Component/Carousel';
import QualityCard from './Component/QualityCard';
import About from './Component/About';
import Counter from './Component/Counter';
import Client from './Component/Client';
import 'swiper/css';
import Features from './Component/Features';
import Courses from './Component/Courses';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  return (
    <div className="App">
    <Navbar/>
    <Carousel/>
    <QualityCard/>
      <About/>
      <Counter/>
      <Client/>
      <Features/>
  
      <Courses />
    </div>
  );
}

export default App;
