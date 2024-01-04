// RestaurantDetails.js
import React from 'react';
import '../RestauDetail/RestaurantDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const RestaurantDetails = () => {
  return (
    <div>
        
    <div className="restaurantdetails-container">
       
        <div className="card cardresdet ">
            <img
                src="https://images.pexels.com/photos/6088381/pexels-photo-6088381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="card-img-top"
                alt="Restaurant Image"
            />
            <div className="photo-overlay">
                <h1>Travelers’ Choice</h1>
                <p> Best of the Best Restaurants</p>
            </div>
        </div>


        <div className="second-container">
            <div className='photo-section'>
                <img
                    src="https://images.pexels.com/photos/3763816/pexels-photo-3763816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="card-img-top"
                    alt="Restaurant Image1"
                />
            </div>
            <p className='paragraphdetaila'>Welcome to Ocean Delight – an exquisite seafood restaurant nestled in the heart of the city in Oran</p>
            <div className="Localisation">
                <button>Localisation</button>
            </div>
        </div>
        

        <div className="second-container">
            <div className='photo-section1'>
                <img
                    src="https://images.pexels.com/photos/8995162/pexels-photo-8995162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="card-img-top"
                    alt="Restaurant Image1"
                />
            </div>
            <p className='paragraphdetaila1'>As you step through our doors, you are greeted by a warm ambiance that echoes the freshness of the ocean. Soothing shades of blue and white create an elegant maritime setting, while subtle decor reminiscent of waves and seashells adds to the overall atmosphere.</p>
        </div>



        <div className="second-container">
            <div className='photo-section1'>
                <img
                    src="https://images.pexels.com/photos/428355/pexels-photo-428355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="card-img-top"
                    alt="Restaurant Image1"
                />
            </div>
            <p className='paragraphdetaila1'>Our meticulously crafted menu showcases the treasures of the sea in all their glory. Fresh seafood of the day takes center stage, ranging from succulent oysters to juicy shrimp. The dishes are prepared with unparalleled culinary expertise, highlighting the quality of ingredients we carefully select.</p>

        </div>


    </div>
    </div>
    
  );
};

export default RestaurantDetails;