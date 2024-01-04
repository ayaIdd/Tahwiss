import React from "react";
import './app.css'
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";
import Qa from "./Components/Q&A/QAPage"
import Posts from "./Components/Posts/Posts";
import Joureny from "./Components/journey/journey";
import AfterLandingPage from "./Components/Afterlanding/AfterLandingPage"
import Article from "./Components/Article/Article";
import { Routes,Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Thingstodo from "./Pages/thingstodo/Thingstodo";
import RestaurantDetails from "./Components/Restaurants/RestauDetail/RestaurantDetails";
import PlusDeDetailsPlace from "./Components/Places/DetailPlace/PlusDeDetailPlace"
import PlusDeDetailsArticle from "./Components/Article/PlusDeDetailsArticle/PlusDeDetailsArticle";
import LoadMoreRestaurant from "./Components/Restaurants/LoadMoreRestaurant";
import Profile from "./Components/Profile";

const App = () => {
 return(
  
   <div className="App">
   <Router>
      <Routes>
       {/* <Route path="/" element={<Main/>}/>
       <Route path='/thingstodo' element={<Thingstodo/>}/>
       <Route path='/details' element={<RestaurantDetails/>}/>
       <Route path='/detailsarticle' element={<PlusDeDetailsArticle/>}/>
       <Route path="/loadmore" element={<LoadMoreRestaurant/>} /> */}
        <Route path="/" element={<Profile/>} /> 


      </Routes>
   </Router>
  
   </div>
      
 );


}
export default App;


