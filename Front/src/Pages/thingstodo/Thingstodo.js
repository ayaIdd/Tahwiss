import React from 'react';


import "../thingstodo/Thingstodo.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Restaurant from '../../Components/Restaurants/Restaurant';
import Places from '../../Components/Places/Places';
import Arts from '../../Components/Arts/Arts';
import Experiences from '../../Components/Experiences/Experiences';
import { Link } from 'react-router-dom';


function Arrow(props) {
    const { className, onClick } = props;
    return (
      <div
        
        className={`custom-arrow2 ${className}`}
        onClick={onClick}
      />
    );
  }
const Thingstodo = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <Arrow />,
      prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
       
        ]
      };
    return (
    
    <div className="container3">
         
        <div className="square">
            <div className="line"></div>
            <div className="title">Best Restaurants</div>
            <p className="paragraph">
                Embark on a gastronomic adventure at our restaurant, where the rich flavors of Algerian
                cuisine come to life, offering a sublime fusion of tradition and innovation that captures
                the essence of our culinary heritage.
            </p>
            <div className="arrow"><Link to='/loadmore' className="custom-link">
           </Link>
        </div>
        </div> 
        <Restaurant />


        <div className="square1">
            <div className="line"></div>
            <div className="title1">Places to visit</div>
            <p className="paragraph1">
            Exploring the breathtaking natural wonders of Algeria allows one to immerse themselves in the diverse landscapes, from the Sahara Desert's golden dunes to the lush greenery of the Kabylie region, providing a captivating journey through the country's rich and varied ecosystems
            </p>
            
        </div>
        <Places/>
        

        <div className="square2">
            <div className="line"></div>
            <div className="title2">Arts</div>
            <p className="paragraph2">
            Immerse yourself in a unique artistic journey at our venue, where Algerian art flourishes, providing an exceptional blend of tradition and innovation that celebrates the essence of our artistic heritage
            </p>
            
        </div>
        <Arts/>


        <div className="square3">
            <div className="line"></div>
            <div className="title3">Experiences</div>
            <p className="paragraph3">
            Immerse yourself in a unique artistic journey at our venue, where Algerian art flourishes, providing an exceptional blend of tradition and innovation that celebrates the essence of our artistic heritage
            </p>
            
        </div>
        <Experiences/>
 

      </div>
               
        


      
   


);
};

export default Thingstodo;