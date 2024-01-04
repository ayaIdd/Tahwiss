import React from 'react';
import './PlusDeDetailsArticle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import { MdHeight } from 'react-icons/md';



const PlusDeDetailsArticle = () => {
const location=useLocation() ;
const article = location.state ;
    return (
    <div className="Articledetails-container">   
        <div className="card cardardet ">
            <img
                src={article.photos[0]}
                className="card-img-top"
                alt="Restaurant Image"
            />
            <div className="photo-overlay">
                <h1>{article.title}</h1>
                <p> {article.sub_title}</p>
            </div>
        </div>
        {
            article.photos.map((photo,index) =>{
                return (
                    <div className="second-container">
                    <div className={index%2?"photo-section1":"photo-section"}>
                        <img
                            src={photo }
                            className="card-img-top"
                            alt="Restaurant Image1"
                        />
                    </div>
                    <p className={index%2?"paragraphdetailar1":"paragraphdetailar"}>{article.content.split('.')[index]}</p>
                </div>
                )
            })
        }
    </div>
  );
};

export default PlusDeDetailsArticle;