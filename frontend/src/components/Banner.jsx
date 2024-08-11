import React, { useEffect, useState } from 'react';
import './banner.css'

const Banner = ({ currentBanner }) => {
    if (!currentBanner) return null;
  const [timeLeft, setTimeLeft] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (currentBanner) {
      setTimeLeft(currentBanner.timer); 
      setIsVisible(currentBanner.visibility); 
    }
  }, [currentBanner]);

  useEffect(() => {
    if (timeLeft <= 0) return; 

    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsVisible(false); 
          clearInterval(timerInterval); 
          return 0; 
        }
        return prev - 1; 
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeLeft]);


  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  };

  if (!currentBanner) return null;

 
  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='banner'>
      {isVisible && (
        <>
          <h1>{currentBanner.description}</h1>
          <p>{formatTime(timeLeft)} remaining</p>
          <a href={currentBanner.link} target="_blank" rel="noopener noreferrer">Click here</a>
        </>
      )}
      <button onClick={handleVisibility}>
        {isVisible ? 'Hide Banner' : 'Show Banner'}
      </button>
    </div>
  );
};

export default Banner;




