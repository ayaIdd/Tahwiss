import React, { useState, useEffect } from "react";
import './Main.css'
import BGimg from './bg.png'
import BGimg1 from './bg1.png'
import BGimg2 from './bg4.png'
import BGimg3 from './bg3.png'
import NavBar from "../NavBar/NavBar";
import AfterLandingPage from "../Afterlanding/AfterLandingPage";
import Article from "../Article/Article";
import Main2 from "../Main2/Main2";
import Posts from "../Posts/Posts";
import QAPage from "../Q&A/QAPage";
import Journey from "../journey/journey";

const Main = () => {
 const [backgroundImage, setBackgroundImage] = useState(BGimg);
 const [opacity, setOpacity] = useState(1);

 useEffect(() => {
  const interval = setInterval(() => {
   setOpacity(0);
   setTimeout(() => {
 if (backgroundImage === BGimg) {
  setBackgroundImage(BGimg1);
 } else if (backgroundImage === BGimg1) {
  setBackgroundImage(BGimg2);
 } else if (backgroundImage === BGimg2) {
  setBackgroundImage(BGimg3);
 } else {
  setBackgroundImage(BGimg);
 }
 setOpacity(1);
   }, 500);
  }, 5000);

  return () => clearInterval(interval);
 }, [backgroundImage]);

 return (
  <>
  <NavBar/>
    
  <div
   style={{
 backgroundImage: `url(${backgroundImage})`,
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 height: '100vh',
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
 transition: 'opacity 0.5s ease',
 opacity: opacity
   }}
  >
   <div style={{ textAlign: 'center', color: 'white' }}>
 <p style={{ fontSize: '1rem' }}>Happiness is our nature</p>
 <h1 style={{ fontSize: '3rem' }}>The Open Country Door of Africa</h1>
   </div>
  </div>
  <AfterLandingPage/>
  <Article/>
  <Main2/>
  <Posts/>
  <QAPage/>
  <Journey/>
  </>
 );
}

export default Main;

