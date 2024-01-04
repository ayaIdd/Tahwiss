// RestaurantDetails.js
import React from 'react';
import './LoadMoreRestaurant.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegHeart  } from 'react-icons/fa';
// import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const LoadMoreRestaurant = () => {
const location=useLocation();
const {articles,type} = location.state ;
const navigate = useNavigate();
const staticList=[
  {
    type:'article',
    img:'https://images.pexels.com/photos/6088381/pexels-photo-6088381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    h1:'Decouvrir L\'Algerie',
    p:'A partir de ces Articles'
  },
  {
    type:'restaurant',
    img:'https://images.pexels.com/photos/6088381/pexels-photo-6088381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    h1:'Les voyageurs choisissent',
    p:'Les meilleures des meilleures restaurants'
  },
  {
    type:'art',
    img:'https://images.pexels.com/photos/6088381/pexels-photo-6088381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    h1:'Decouvrir L\'Algerie',
    p:'A partir de ces arts'
  },
  { 
    type:'place',
    img:'https://images.pexels.com/photos/6088381/pexels-photo-6088381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    h1:'Decouvrir L\'algerie',
    p:'A partir de ces places'
  },
  {
    type:'experience',
    img:'https://images.pexels.com/photos/6088381/pexels-photo-6088381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    h1:'Decouvrir L\'algerie',
    p:'A partir des experiences de ces visiteurs'
  }
]
  return (
   
    <>
    {/* <NavBar/> */}
    {
      staticList.map((item,index)=>{
        if (item.type==type){
          return (
            <div className="card cardLoadMoreRestaurant ">
            <img
                src={item.img}
                className="card-img-top"
                alt="Restaurant Image"
            />
            <div className="photo-overlaycardLoadMoreRestaurant">
                <h1>{item.h1}</h1>
                <p>{item.p}</p>
            </div>
            </div>
              )
        }
   
      })
    }
   

      
      <div className='ContainerLoadMoreRestaurant'>
        <div className="row">
          {
            articles.map((article,index)=>{
              return (
                <div className="col-md-3 mb-4">
                <div className="card">
                  <img className="card-img-top-load" src={article.photos[0]} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{article.title} </h5>
                    <p className="card-text"> {article.small_description}</p>
                  </div>
                  <div className="adore-squareArticle">
              <FaRegHeart className="adore-icon"/>
            </div>
            <div className="additional-detailsArticlesale">
  <button className="details-buttonArticlesale" onClick={() => navigate('/detailsarticle' , {state:article})}>Plus de détails</button>
</div>

                </div>     
              </div>
              )
            })
          }
        
          {/* <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/4637765/pexels-photo-4637765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/693269/pexels-photo-693269.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/3915855/pexels-photo-3915855.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text </p>
              </div>
            </div>
          </div>



          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.unsplash.com/photo-1665356203435-9f1d0e5443c7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/110813/pexels-photo-110813.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/4450334/pexels-photo-4450334.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card">
              <img className="card-img-top" src="https://images.pexels.com/photos/511763/pexels-photo-511763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text </p>
              </div>
            </div>
          </div> */}



        </div>
      </div></>
  );
};

export default LoadMoreRestaurant;
