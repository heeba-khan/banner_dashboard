// src/pages/Home.jsx
import React, { useState } from 'react';
import Banner from '../components/Banner';
import Dashboard from '../components/Dashboard';
import './home.css'

// const Home = () => {
//     const [currentBanner, setCurrentBanner] = useState(null);
//     const [isVisible, setIsVisible] = useState(false);
  
//     return (
//       <div className="container">
//         <Banner currentBanner={currentBanner} isVisible={isVisible} handleVisibility={() => setIsVisible(!isVisible)} />
//         <Dashboard setCurrentBanner={setCurrentBanner} />
//       </div>
//     );
//   };

const Home = () => {
    const [currentBanner, setCurrentBanner] = useState(null);
  
    return (
      <div className='container'>
        <Banner currentBanner={currentBanner} />
        <Dashboard setCurrentBanner={setCurrentBanner} />
      </div>
    );
  };

export default Home;
