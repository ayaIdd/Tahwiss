import React from 'react';
import sardine from './sardine.png';
import oran from './orn.png';
import serdine from './serdine.png';
import casbh from './casbh.png';

import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Journey = () => {
  const [sliderRef, setSliderRef] = useState(null)
  const Settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3
  };

 const journeys = [{ image: casbh, title: 'Journey:Explore tastes of mediterranean food' },
 { image: oran, title: 'Joureny:iconic santa cruz' },
 { image: sardine, title: 'Journey:Go to Sahara to see Camels,fenecs',},
 { image: serdine, title: 'Journey: Algeria s UNESCO World Heritage Sites' },
 { image: casbh, title: 'Journey:Explore tastes of mediterranean food' },
  { image: serdine, title: 'Journey: Algeria s UNESCO World Heritage Sites' },
  { image: serdine, title: 'Journey: Algeria s UNESCO World Heritage Sites' },
 { image: casbh, title: 'Journey:Explore tastes of mediterranean food' },
 { image: sardine, title: 'Journey:Go to Sahara to see Camels,fenecs',},
 { image: serdine, title: 'Journey: Algeria s UNESCO World Heritage Sites' },
 { image: casbh, title: 'Journey:Explore tastes of mediterranean food' },

  
 ];

 return (
  <div className="page" style={{ backgroundColor: 'white', height: '100vh', width: '100vw' }}>
   
   <div className="squaree" style={{ backgroundColor: 'white', width: '100%', height: '160px', top:'10px', display: 'flex',marginBottom:'6rem' }}>
    <div style={{ marginLeft: '3rem', paddingTop: '22px' }}>
     <div style={{ borderBottom: '1px solid black', width: '310px', marginBottom: '16px' }}></div>
     <h1 style={{ color: 'black', textAlign: 'left', fontWeight: 'normal', marginBottom: '5px' }}>
      Inspiration to your next 
     </h1>
     <h1 style={{ color: 'black', textAlign: 'left', fontWeight: 'normal' }}>
      Journey
     </h1>
     <p style={{ marginLeft: '35rem', marginTop: '-7rem',marginRight:'6rem' }}>
      Not sure what to do on your next trip to Algeria? No worries. We have gathered a section
      <br/>
      of
      curated journeys from different parts of the country. Find interesting sights to see, 
      <br/>places to visit,and restaurants to dine in.
     </p>
    </div>
   </div> 

   
      <div className='controls' style={{marginLeft:'8.85rem',width:'87%'}} >
         
    
       <Slider  {...Settings}>
         {journeys.map((journey, index) => (
          <div key={index} style={{}} >
            
           
            
          <div key={index} style={{ position: 'relative' }}>
            <h1 style={{
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              paddingRight: '20px',
              borderRadius: '5px',
              position: 'absolute',
              top: '70%',
              left: '80%',
              zIndex: '1',
              fontSize: '0.75rem',
              
            }}>
              {journey.title}
            </h1>
            <img src={journey.image} alt={journey.title} style={{ width: '95%', height: '350px', border: '1px medium black', borderRadius: '10px', overflow: 'hidden', marginLeft: '9rem', paddingRight: '-10rem' }} />
          </div>

          
            
            
            
            
            
          </div>
        ))}
       </Slider>
     </div>
   
  


  </div>
 );
}

export default Journey;





/*
<div className="journey-section" style={{ backgroundColor: 'white', color: 'black' }}>
    <div className="journey-card-container" style={{ display: 'flex', marginLeft: '6rem' }}>
    
      {journeys.map((journey, index) => (
       <div
        key={index}
        className="journey-card"
        style={{
         width: '200px',
         margin: '0 10px',
         border: '1px medium black',
         borderRadius: '10px',
         overflow: 'hidden',
         position: 'relative', // Add position relative
        }}
       >
        <img src={journey.image} alt={journey.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div
         className="journey-card-title"
         style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '10px 10px',
          borderRadius: '5px',
          marginRight:'30px',
          marginLeft:'10px'
         }}
        >
         {journey.title}
        </div>
       </div>
      ))}
     
    </div>
   </div>*/