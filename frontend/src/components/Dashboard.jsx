import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase'; 
import './dashboard.css';

const Dashboard = ({ setCurrentBanner }) => {
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState('');
  const [link, setLink] = useState('');
  const [banner, setBanner] = useState(null);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formattedLink = link.startsWith('http://') || link.startsWith('https://') ? link : `http://${link}`;

  //   const { data, error } = await supabase
  //     .from('myDatabase')
  //     .insert([{ description, timer, link: formattedLink, visibility: true }]);

  //   if (error) {
  //     console.error('Error creating banner:', error);
  //   } else {
  //     const newBanner = data[0];
  //     setBanner(newBanner);
  //     setCurrentBanner(newBanner);
  //     setDescription('');
  //     setTimer('');
  //     setLink('');
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedLink = link.startsWith('http://') || link.startsWith('https://') ? link : `http://${link}`;
  
    const { data: newBanner, error } = await supabase
      .from('myDatabase')
      .insert([{ description, timer, link: formattedLink, visibility: true }]);
  
    if (error) {
      console.error('Error creating banner:', error);
      return;
    }
  
    // Refetching the latest banner after insertion
    await fetchBanner(); 
    setDescription('');
    setTimer('');
    setLink('');
  };
  
  
  

  const toggleVisibility = async () => {
    if (banner) {
      const updatedBanner = { ...banner, visibility: !banner.visibility };
      const { error } = await supabase
        .from('myDatabase')
        .update({ visibility: updatedBanner.visibility })
        .eq('id', banner.id);

      if (error) {
        console.error('Error updating banner visibility:', error);
      } else {
        setBanner(updatedBanner);
        setCurrentBanner(updatedBanner);
      }
    }
  };

  useEffect(() => {
    const fetchBanner = async () => {
      const { data, error } = await supabase
        .from('myDatabase')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1);

      if (error) {
        console.error('Error fetching banner:', error);
      } else if (data.length > 0) {
        const latestBanner = data[0];
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




