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
    const [isVisible, setIsVisible] = useState(true); // Set to true to show the banner by default

    return (
      <div className="container">
        <Banner currentBanner={currentBanner} isVisible={isVisible} />
        <Dashboard setCurrentBanner={setCurrentBanner} />
      </div>
    );
};

export default Home;
