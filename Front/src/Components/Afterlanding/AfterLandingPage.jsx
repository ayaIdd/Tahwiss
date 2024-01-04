import React from 'react';
import joo from "../../assets/joo.jpg";
import "./AfterLandingPage.css";





function MonComposant() {
  return (
    <div>
      <img src={joo} className="mon-image" />
      <div className="squareAftr">
        <div className="text-container">
          <p>Let’s enjoy your</p>
          <p>Desired trip with</p>
          <p className="colored-text">TAHWISSA</p>
          <div className="additional-text">
            <pre>
              Explore the hidden gems of Algeria's diverse <br />
              landscapes and rich culture, vibrant historic <br />
              cities, and warm hospitality
            </pre>
          </div>
        </div>
        <button><p>Join us </p></button>
      </div>
    </div>
  );
}

export default MonComposant;