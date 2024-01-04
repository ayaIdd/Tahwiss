import React, { useState } from 'react';
import show from './SVG.png';
import fenec from './fenec.png';





const QAPage = () => {
  const [isLineVisible, setLineVisible] = useState(true);
  const [showAnswer, setShowAnswer] = useState(true);
  const [showAnswer1, setShowAnswer1] = useState(true);
  const [showAnswer2, setShowAnswer2] = useState(true);
  const [showAnswer3, setShowAnswer3] = useState(true);

  const handleButtonClick = () => {
    setLineVisible(!isLineVisible);
    setShowAnswer(!showAnswer);
  };

  const handleButtonClick1 = () => {
    setShowAnswer1(!showAnswer1);
  };

  const handleButtonClick2 = () => {
    setShowAnswer2(!showAnswer2);
  };

  const handleButtonClick3 = () => {
    setShowAnswer3(!showAnswer3);
  };

  return (
    <div style={{ backgroundColor: 'white', margin: 0, minHeight: '100vh', paddingLeft: '100px', paddingTop: '0', paddingTop: '80px' }}>
      <div style={{ borderBottom: '1px solid black', width: '250px', marginBottom: '10px' }}></div>
      <h1 style={{ color: 'black', textAlign: 'left', fontWeight: 'normal' }}>Few common questions</h1>
      <p style={{ color: 'green', textAlign: 'left', fontWeight: 'bold' }}>View full Q&A</p>

      <div style={{ marginTop: '5.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={{ color: 'black', textAlign: 'left', fontWeight: 'normal', marginRight: '10.6rem',fontSize:'20px' }}>What’s the best time of year to visit Algeria?</h3>
          <button onClick={handleButtonClick} style={{ cursor: 'pointer', backgroundColor: 'white', border: 'none' }}>
            <img src={show} alt="Button" style={{ width: '20px', height: '20px' }} />
          </button>
        </div>

        <hr alt='line' style={{ marginTop: '20px', marginBottom: showAnswer ? '0' : '30px', width: '50%', transition: 'margin-bottom 0.5s', alignSelf: 'flex-start' }} />

        {!showAnswer && (
          <p style={{ color: 'black', textAlign: 'left', fontWeight: 'normal', marginBottom: '1rem', opacity: showAnswer ? 0 : 1, transition: 'opacity 0.5s', color: 'green', fontWeight: 'bold' }}>
            The best time to visit Algeria is during the spring (March to May) 
            <br/> and autumn (September to November) when the weather is mild and pleasant.
          </p>
        )}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={{ color: 'black', textAlign: 'left', fontWeight: 'normal', marginRight: '7.2rem',fontSize:'20px' }}>Do I need a passport or visa to enter the country?</h3>
          <button onClick={handleButtonClick1} style={{ cursor: 'pointer', backgroundColor: 'white', border: 'none' }}>
            <img src={show} alt="Button" style={{ width: '20px', height: '20px' }} />
          </button>
        </div>

        <hr alt='line' style={{ marginTop: '20px', marginBottom: showAnswer1 ? '0' : '30px', width: '50%', transition: 'margin-bottom 0.5s', alignSelf: 'flex-start' }} />

        {!showAnswer1 && (
          <p style={{ color: 'black', textAlign: 'left', fontWeight: 'normal', marginBottom: '1rem', opacity: showAnswer1 ? 0 : 1, transition: 'opacity 0.5s', color: 'green', fontWeight: 'bold' }}>
            The best time to visit Algeria is during the spring (March to May)
            <br/>  and autumn (September to November) when the weather is mild and pleasant.
          </p>
        )}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={{ color: 'black', textAlign: 'left', fontWeight: 'normal', marginRight: '11.75rem',fontSize:'20px' }}>What are some basic facts about Algeria?</h3>
          <button onClick={handleButtonClick2} style={{ cursor: 'pointer', backgroundColor: 'white', border: 'none' }}>
            <img src={show} alt="Button" style={{ width: '20px', height: '20px' }} />
          </button>
        </div>

        <hr alt='line' style={{ marginTop: '20px', marginBottom: showAnswer2 ? '0' : '30px', width: '50%', transition: 'margin-bottom 0.5s', alignSelf: 'flex-start' }} />

        {!showAnswer2 && (
          <p style={{ color: 'black', textAlign: 'left', fontWeight: 'normal', marginBottom: '1rem', opacity: showAnswer2 ? 0 : 1, transition: 'opacity 0.5s', color: 'green', fontWeight: 'bold' }}>
            The best time to visit Algeria is during the spring (March to May)
            <br/> and autumn (September to November) when the weather is mild and pleasant.
          </p>
        )}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={{ color: 'black', textAlign: 'left', fontWeight: 'normal', marginRight: '20rem',fontSize:'20px' }}>Where should I go in Algeria?</h3>
          <button onClick={handleButtonClick3} style={{ cursor: 'pointer', backgroundColor: 'white', border: 'none' }}>
            <img src={show} alt="Button" style={{ width: '20px', height: '20px' }} />
          </button>
        </div>

        <hr alt='line' style={{ marginTop: '20px', marginBottom: showAnswer3 ? '0' : '30px', width: '50%', transition: 'margin-bottom 0.5s', alignSelf: 'flex-start' }} />

        {!showAnswer3 && (
          <p style={{ color: 'black', textAlign: 'left', fontWeight: 'normal', marginBottom: '1rem', opacity: showAnswer3 ? 0 : 1, transition: 'opacity 0.5s', color: 'green', fontWeight: 'bold' }}>
            The best time to visit Algeria is during the spring (March to May)
            <br/>  and autumn (September to November) when the weather is mild and pleasant.
          </p>
        )}
      </div>

      <div style={{ position: 'absolute', top: '720%', right: '4%' }}>
        <img src={fenec} alt="Fenec" style={{ width: '300px', height: '300px' }} />
        <div style={{fontWeight:'bold'}}>
          <p >Did you know Algerian Sahara is full of fenec species?</p>
          <p>And it's our official name in the football team.</p>
        </div>
      </div>
    </div>
  );
};

export default QAPage;
 