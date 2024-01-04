import React from 'react';

import { FaRegHeart } from 'react-icons/fa';
import '../Experiences/Experiences.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Experiences() {
  return (
    <div className="containerExperiences">
      <h5 className="titleexp">Top experiences on TAHWISSA</h5>
      <div className="custom-sliderexp">

        <div className="columnexp">
          <div className="cardexp card-exp1">
            <img
              src="https://images.pexels.com/photos/4881624/pexels-photo-4881624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Image 1"
            />
            <div className="adore-square18">
        <FaRegHeart  className="adore-icon" />
      </div>
      <div className="additional-details-exp">
            <button className="details-button-exp">Plus de détails</button>
      </div>
          </div>


          <div className="cardexp card-exp2">
            <img
              src="https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 2"
            />
<div className="adore-square17">
        <FaRegHeart  className="adore-icon" />
      </div>
      <div className="additional-details-exp">
            <button className="details-button-exp">Plus de détails</button>
      </div>
          </div>
        </div>

        <div className="columnexp">
          <div className="cardexp card-exp3">
            <img
              src="https://images.unsplash.com/photo-1565969665621-3fc79dcd9797?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 3"
            />
            <div className="adore-square13">
        <FaRegHeart  className="adore-icon" />
      </div>
      <div className="additional-details-exp">
            <button className="details-button-exp">Plus de détails</button>
      </div>
          </div>
        </div>

        <div className="columnexp">
          <div className="cardexp card-exp4">
            <img
              src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg"
              alt="Image 4"
            />
            <div className="adore-square456">
        <FaRegHeart  className="adore-icon" />
      </div>
      <div className="additional-details-exp">
            <button className="details-button-exp">Plus de détails</button>
      </div>
          </div>
      
          <div className="cardexp card-exp5">
            <img
              src="https://images.pexels.com/photos/4577574/pexels-photo-4577574.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 5"
            />
            <div className="adore-square456">
        <FaRegHeart  className="adore-icon" />
      </div>
      <div className="additional-details-exp">
            <button className="details-button-exp">Plus de détails</button>
      </div>
          </div>
          <div className="cardexp card-exp6">
            <img
              src="https://images.unsplash.com/photo-1594768816441-1dd241ffaa67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 6"
            />
            <div className="adore-square456">
        <FaRegHeart  className="adore-icon" />
      </div>
      <div className="additional-details-exp">
            <button className="details-button-exp">Plus de détails</button>
      </div>
          </div>
        </div>

        <div className="columnexp">
          <div className="cardexp card-exp7">
            <img
              src="https://images.pexels.com/photos/2433353/pexels-photo-2433353.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 7"
            />
            <div className="adore-square17">
        <FaRegHeart  className="adore-icon" />
      </div>
      <div className="additional-details-exp">
            <button className="details-button-exp">Plus de détails</button>
      </div>
          </div>
          <div className="cardexp card-exp8">
            <img
              src="https://images.unsplash.com/photo-1544551763-8dd44758c2dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 8"
            />
            <div className="adore-square18">
        <FaRegHeart  className="adore-icon" />
      </div>
      <div className="additional-details-exp">
            <button className="details-button-exp">Plus de détails</button>
      </div>
          </div>
        </div>
      </div>

      <div className="load-more-buttonexp">
        <button>Load More</button>
      </div>
    </div>
  );
}

export default Experiences;