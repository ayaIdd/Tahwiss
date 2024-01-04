
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaRegHeart  } from 'react-icons/fa';
import "../Restaurants/Restaurant.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link , useNavigate } from 'react-router-dom';
import axios from 'axios' ;
import { useEffect , useState} from 'react';

function Arrow(props) {
    const { className, onClick } = props;
    return (
      <div
        
        className={`custom-arrow2 ${className}`}
        onClick={onClick}
      />
    );
  }

function Restaurant() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
      prevArrow: <Arrow />,
        initialSlide: 0,
        autoplay: false,
      speed: 300,
      autoplaySpeed: 300,
      cssEase: "linear",
   
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
              if (article.type=='Restaurant') {
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
   
     <div className='containerRestaurant'>
        <h5 className='titlerestaurant'>Travelers’ Choice Best of the Best Restaurants</h5>
        <Slider {...settings} className='custom-slider' >



 
  {
    articles.map((article,index)=>{
      return(
        <div class="card cardt" key={index}>
        <img class="card-img-top" src={article.photos[0]}alt="Card image cap" width={'400px'} height={'150px'} />
        <div class="card-body">
          <h5 class="card-title">{article.title}</h5>
          <div className="adore-square1-res">
            <FaRegHeart  className="adore-icon" />
          </div>
          <div className="additional-details">
                <button className="details-button" onClick={() => navigate('/detailsarticle' , {state:article}) }>Plus de détails</button>
          </div>
        </div>
      </div>
      )

   
    })
  }


  
    {/* <div className='card cardt' >
    <img class="card-img-top" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap"  />
    <div class="card-body">
      <h5 class="card-title">Signature</h5>
      <div className="adore-square1">
        <FaRegHeart  className="adore-icon" />
      </div>
      <div className="additional-details">
            <button className="details-button"><Link to='/details' className="custom-link">Plus de détails</Link></button>
      </div>
    </div>
   
  </div> */}

  
    <div className='card cardt' >
    <img class="card-img-top" src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap"  />
    <div class="card-body">
      <h5 class="card-title">Jenina</h5>
      <div className="adore-square1">
        <FaRegHeart className="adore-icon" />
      </div>
      <div className="additional-details">
            <button className="details-button"><Link to='/details' className="custom-link">Plus de détails</Link></button>
      </div>
    </div>
  </div>

  
    <div className='card cardt' >
    <img class="card-img-top" src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap"  />
    <div class="card-body">
      <h5 class="card-title">Taj Mahel</h5>
      <div className="adore-square1">
        <FaRegHeart  className="adore-icon" />
      </div>
      <div className="additional-details">
            <button className="details-button"><Link to='/details' className="custom-link">Plus de détails</Link></button>
      </div>
    </div>
  </div>



  <div className='card cardt' >
    <img class="card-img-top" src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap"  />
    <div class="card-body">
      <h5 class="card-title">One meal</h5>   
      <div className="adore-square1">
        <FaRegHeart  className="adore-icon" />
      </div>
      <div className="additional-details">
            <button className="details-button"><Link to='/details' className="custom-link">Plus de détails</Link></button>
      </div>
    </div>
  </div>



  <div className='card cardt' >
    <img class="card-img-top" src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap"  />
    <div class="card-body">
      <h5 class="card-title">Bob food</h5>   
      <div className="adore-square1">
        <FaRegHeart  className="adore-icon" />
      </div>
      <div className="additional-details">
            <button className="details-button"><Link to='/details' className="custom-link"> Plus de détails</Link></button>
      </div>
    </div>
  </div>

     </Slider>
   
      <div className="load-more-button">
        <button onClick={() => navigate('/loadmore' , {state:{articles:articles,type:'restaurant'}})}>Load More</button>
      </div>
      </div>
      
   
  )
}

export default Restaurant
