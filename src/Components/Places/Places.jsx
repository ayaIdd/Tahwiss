
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaRegHeart  } from 'react-icons/fa'
import "../Places/Places.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link , useNavigate } from 'react-router-dom';
import axios from 'axios' ;
import { useEffect , useState} from 'react';
import { MdHeight } from 'react-icons/md';

function Arrow(props) {
    const { className, onClick } = props;
    return (
      <div
        
        className={`custom-arrow2 ${className}`}
        onClick={onClick}
      />
    );
  }

function Places() {
    var settings = {
        dots: false,
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

      const [articles, setArticles] = useState([]);
      const navigate = useNavigate();
      useEffect(() => {
        axios.get('http://localhost:4000/articles/')
          .then(response => {
            const list=[]
            response.data.map((article,index)=>{
              if (article.type=='place') {
                list.push(article)
              }
            })
    
            setArticles(list);
            // console.log(response.data[0].photos);
            // alert(list[0].type);
          })
          .catch(error => {
            console.error('Error fetching articles:', error);
            
          });
      }, []);

  return (
   
     <div className='containerPlaces'>
        <h5 className='titlerplaces'>Top destinations for your next vacation</h5>
        <Slider {...settings} className='custom-slider' >


        {
    articles.map((article,index)=>{
      return(
        <div class="card card" key={index}>
        <img class="card-img-top-p" src={article.photos[0]}alt="Card image cap" width={'500px'} height={'200px'}  />
        <div class="card-body">
          <h5 class="card-title">{article.title}</h5>
          <div className="adore-square">
            <FaRegHeart  className="adore-icon" />
          </div>
          <div className="additional-details-place">
                <button className="details-button-place" onClick={() => navigate('/detailsarticle' , {state:article}) }>Plus de détails</button>
          </div>
        </div>
      </div>
      )

   
    })
  }


 
  
  <div class="card  ">
    <img class="card-img-top custom-image" src="https://images.pexels.com/photos/17371176/pexels-photo-17371176/free-photo-of-noir-et-blanc-ville-maisons-monument.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap"   />
    <div class="card-body">
      <h5 class="card-title">Costantine</h5>
      <div className="adore-square">
        <FaRegHeart  className="adore-icon" />
      </div>
      <div className="additional-details-place">
            <button className="details-button-place"><Link to='/PlusDeDetailPlace' className="custom-link">Plus de détails</Link></button>
      </div>
    </div>
  </div>

  
    <div className='card' >
    <img class="card-img-top custom-image" src="https://images.pexels.com/photos/7698883/pexels-photo-7698883.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap"  />
    <div class="card-body">
      <h5 class="card-title">Casbah d'Alger</h5>
      <div className="adore-square">
        <FaRegHeart  className="adore-icon" />
      </div>
      <div className="additional-details-place">
            <button className="details-button-place"><Link to='/PlusDeDetailPlace' className="custom-link">Plus de détails</Link></button>
      </div>
    </div> 
  </div>

  
    <div className='card' >
    <img class="card-img-top custom-image" src="https://images.pexels.com/photos/8798170/pexels-photo-8798170.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap"  />
    <div class="card-body">
      <h5 class="card-title">Monument</h5>
      <div className="adore-square">
        <FaRegHeart className="adore-icon"/>
      </div>
      <div className="additional-details-place">
            <button className="details-button-place"><Link to='/PlusDeDetailPlace' className="custom-link">Plus de détails</Link></button>
      </div>
    </div> 
  </div>

  
    <div className='card' >
    <img class="card-img-top custom-image" src="https://images.pexels.com/photos/14447304/pexels-photo-14447304.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Card image cap"  />
    <div class="card-body">
      <h5 class="card-title">Hoggar</h5>
      <div className="adore-square">
        <FaRegHeart  className="adore-icon" />
      </div>
      <div className="additional-details-place">
            <button className="details-button-place"><Link to='/PlusDeDetailPlace' className="custom-link">Plus de détails</Link></button>
      </div>
    </div>
  </div>



  <div className='card' >
    <img class="card-img-top custom-image" src="https://images.pexels.com/photos/14683055/pexels-photo-14683055.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap"  />
    <div class="card-body">
      <h5 class="card-title">Costantine</h5>   
      <div className="adore-square">
        <FaRegHeart  className="adore-icon" />
      </div>
      <div className="additional-details-place">
            <button className="details-button-place"><Link to='/PlusDeDetailPlace' className="custom-link">Plus de détails</Link></button>
      </div>
    </div>
  </div>



  <div className='card' >
    <img class="card-img-top custom-image" src="https://images.pexels.com/photos/16171448/pexels-photo-16171448/free-photo-of-ville-art-monument-ciel-bleu.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap"  />
    <div class="card-body">
      <h5 class="card-title">Santin Creuz</h5>   
      <div className="adore-square">
        <FaRegHeart  className="adore-icon" />
      </div>
       <div className="additional-details-place">
            <button className="details-button-place"><Link to='/PlusDeDetailPlace' className="custom-link">Plus de détails</Link></button>
      </div>
    </div>
  </div>
  
 

     </Slider>

      <div className="load-more-button1">
        <button onClick={() => navigate('/loadmore' , {state:{articles:articles,type:'place'}})}>Load More</button>
      </div>
      </div>
   
  )
}

export default Places
