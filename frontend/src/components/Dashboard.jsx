import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css'


const Dashboard = ({ setCurrentBanner }) => {
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState('');
  const [link, setLink] = useState('');
  const [banner, setBanner] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedLink = link.startsWith('http://') || link.startsWith('https://') ? link : http://${link};
    const response = await axios.post('https://banner-dashboard-backend.vercel.app/', {
      description,
      timer,
      link:formattedLink,
      visibility: true,
    });
    const newBanner = response.data;
    setBanner(newBanner);
    setCurrentBanner(newBanner); 
    setDescription('');
    setTimer('');
    setLink('');
  };

  const toggleVisibility = async () => {
    if (banner) {
      const updatedBanner = { ...banner, visibility: !banner.visibility };
      await axios.put(`https://banner-dashboard-backend.vercel.app/api/banners/${banner.id}`, updatedBanner);
      setBanner(updatedBanner);
      setCurrentBanner(updatedBanner); 
    }
  };

  useEffect(() => {
    const fetchBanner = async () => {
      const response = await axios.get('https://banner-dashboard-backend.vercel.app/api/banners'); 
      if (response.data.length > 0) {
        const latestBanner = response.data[0]; // Assuming the first one is the latest
        setBanner(latestBanner);
        setCurrentBanner(latestBanner);
      }
    };

    fetchBanner();
  }, [setCurrentBanner]);

  return (
    <div className='dashboard'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Banner Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Timer (seconds)"
          value={timer}
          onChange={(e) => setTimer(Number(e.target.value))}
          required
        />
        <input
          type="text"
          placeholder="Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <button type="submit">Create Banner</button>
      </form>
      
    </div>
  );
};

export default Dashboard;