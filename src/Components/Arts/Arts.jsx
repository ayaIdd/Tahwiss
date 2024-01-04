
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaRegHeart } from 'react-icons/fa'
import "./Arts.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Arrow(props) {
  const { className, onClick } = props;
  return (
    <div

      className={`custom-arrow2 ${className}`}
      onClick={onClick}
    />
  );
}

function Arts() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 1000,
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
        const list = []
        response.data.map((article, index) => {
          if (article.type == 'art') {
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

    <div className='containerArts'>
      <h5 className='titlerestaurant'>Top Art to do in Algeria </h5>
      <Slider {...settings} className='custom-slider' >
        {
          articles.map((article, index) => {
            return (
              <div class="card cardt" key={index}>
                <img class="card-img-top" src={article.photos[0]} alt="Card image cap" width={'400px'} height={'110px'} />
                <div class="card-body">
                  <h6 class="card-title">{article.title}</h6>
                  <div className="adore-square1a">
                    <FaRegHeart className="adore-icon" />
                  </div>
                  <div className="additional-details">
                    <button className="details-button" onClick={() => navigate('/detailsarticle', { state: article })}>Plus de détails</button>
                  </div>
                </div>
              </div>
            )


          })
        }





        <div class="card cardt" >
          <img class="card-img-top" src="https://images.unsplash.com/photo-1644613537725-705c4b68f3c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Casbah Istanbul</h5>
            <div className="adore-square1">
              <FaRegHeart className="adore-icon" />
            </div>
            <div className="additional-details">
              <button className="details-button">Plus de détails</button>
            </div>
          </div>
        </div>



        <div className='card cardt' >
          <img class="card-img-top" src="https://images.unsplash.com/photo-1545167496-31b3aa75296c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Signature</h5>
            <div className="adore-square1">
              <FaRegHeart className="adore-icon" />
            </div>
            <div className="additional-details">
              <button className="details-button">Plus de détails</button>
            </div>
          </div>

        </div>


        <div className='card cardt' >
          <img class="card-img-top" src="https://images.unsplash.com/photo-1644613534984-c931fc8f012b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Jenina</h5>
            <div className="adore-square1">
              <FaRegHeart className="adore-icon" />
            </div>
            <div className="additional-details">
              <button className="details-button">Plus de détails</button>
            </div>
          </div>
        </div>


        <div className='card cardt' >
          <img class="card-img-top" src="https://img.freepik.com/free-photo/clay-pots-market-morocco_23-2148129835.jpg?w=900&t=st=1701705549~exp=1701706149~hmac=d64406195c0f13698c5e7520fa1a27989726adccae117faffb4940478b7a36c7" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Taj Mahel</h5>
            <div className="adore-square1">
              <FaRegHeart className="adore-icon" />
            </div>
            <div className="additional-details">
              <button className="details-button">Plus de détails</button>
            </div>
          </div>
        </div>



        <div className='card cardt' >
          <img class="card-img-top" src="https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">One meal</h5>
            <div className="adore-square1">
              <FaRegHeart className="adore-icon" />
            </div>
            <div className="additional-details">
              <button className="details-button">Plus de détails</button>
            </div>
          </div>
        </div>



        <div className='card cardt' >
          <img class="card-img-top" src="https://images.pexels.com/photos/6670756/pexels-photo-6670756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Bob food</h5>
            <div className="adore-square1">
              <FaRegHeart className="adore-icon" />
            </div>
            <div className="additional-details">
              <button className="details-button">Plus de détails</button>
            </div>
          </div>
        </div>

      </Slider>
      <div className="load-more-button2">
        <button onClick={() => navigate('/loadmore', { state: { articles: articles, type: 'art' } })}>Load More</button>
      </div>
    </div>


  )
}

export default Arts