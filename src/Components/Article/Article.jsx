// RestaurantDetails.js
import React from 'react';
import './Article.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegHeart } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Article = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:4000/articles/')
      .then(response => {
        // const list=response.data.map((article,index)=>{
        //   if article.type=
        // })

        setArticles(response.data);
        console.log(response.data[0].photos);
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
        // alert('Failed to fetch articles');
      });
  }, []);

  return (
    <div class="card-group">
      <div className="squareArticle">
        <div className="lineArticle"></div>
        <div className="titleArticle">Découvrir l'Algérie</div>
        <p className="paragraphArticle">
          Parcourez l'Algérie à travers ces articles, plongeant dans la riche histoire des dattes et explorant la diversité du Sahara. Découvrez Batna et ses grottes étonnantes, offrant un aperçu fascinant de la beauté naturelle et culturelle du pays. Un voyage immersif pour apprécier pleinement les trésors de l'Algérie.
        </p>
        <div className="arrowArticle">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      {
        articles.map((article, index) => {
          if (index <= 4) {
            return (
              <div class="card  cardArticles" key={index}>
                <img class="card-img-top" src={article.photos[0]} alt="Card image cap" />
                <div class="card-body" >
                  <h5 class="card-title">
                    {article.title}
                  </h5>
                  <p class="card-text">
                    {article.small_description}
                  </p>
                </div>
                <div className="adore-squareArticle">
                  <FaRegHeart className="adore-icon" />
                </div>
                <div className="additional-detailsArticles">
                  <button className="details-buttonArticles" onClick={() => navigate('/detailsarticle', { state: article })}>Plus de détails</button>
                </div>
              </div>
            )
          }
        })
      }
      <div className="load-more-buttonArticle">
        <button onClick={() => navigate('/loadmore', { state: { articles: articles, type: 'article' } })}>Load More</button>
      </div>
    </div>
  );
};
export default Article;