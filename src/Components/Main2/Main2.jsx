import React from 'react';
import bg from './bg.png';
import map from './the algerian_map.png';



const Main2 = () => {
 return (
 <div style={{
  marginTop:'12rem',
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', // Center horizontally
  textAlign: 'left', // Align text to the left
  color: 'white', // Set text color to white
  paddingLeft: '6.5rem' // Add left padding to the text
 }}>
  <div>
   <h1>Regions in Algeria</h1>
   <h2 style={{marginTop:'0.25rem'}}>the Four regions</h2>
   <p style={{ marginTop: '1.5rem',marginRight:'5rem' }}>
   Planning a trip to Algeria but don’t know where to start? No worries. Let us introduce you to our four main regions, or as we like to call them, the four regions, where each region has specific wilayas that give another taste of Algeria. Keep scrolling to learn more.
   </p>
 </div>
  <div>
   <img src={map} alt="Algerian Map" style={{ width: '35rem', height: 'auto',marginRight:'5rem',marginTop:'4rem' }} />
  </div>
 </div>
 );
};

export default Main2;

