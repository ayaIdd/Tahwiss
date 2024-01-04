import React from 'react';
import '../DetailPlace/PlusDeDetailPlace.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const PlusDetailsPlace = () => {
  return (
  

    <div className="Placedetails-container">
      

        <div className="card cardAdet ">
            <img
                src="https://images.unsplash.com/photo-1610133290889-0ed892ce5157?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top"
                alt="Restaurant Image"
            />
            <div className="photo-overlayA">
                <h1> La Casbah d'Alger :  </h1>
                <p> Un Trésor Historique au Cœur de l'Algérie </p>
            </div>
        </div>


        <div className="second-container">
            <div className='photo-section'>
                <img
                    src="https://images.unsplash.com/photo-1631995872935-d964797502e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top"
                    alt="Restaurant Image1"
                />
            </div>
            <p className='paragraphdetailar'><h2> La Casbah d'Alger : </h2>La Casbah d'Alger, classée au patrimoine mondial de l'UNESCO, est l'une des plus anciennes citadelles urbaines du monde arabe. Nichée sur une colline surplombant la mer Méditerranée, elle représente un joyau architectural, culturel et historique au cœur de la capitale algérienne.</p>
        </div>
        

        <div className="second-container">
            <div className='photo-section1'>
                <img
                    src="https://images.unsplash.com/photo-1681072861907-ddf941da2405?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top"
                    alt="Restaurant Image1"
                />
            </div>
            <p className='paragraphdetailar1'><h2>Histoire Ancienne</h2>
            La Casbah trouve ses origines au IXe siècle, lorsque le gouverneur d'Alger, Buluggin ibn Ziri, a décidé de construire une forteresse pour protéger la ville des invasions. Au fil des siècles, la Casbah a évolué pour devenir un centre urbain animé, abritant des marchés, des palais, des mosquées et des ruelles étroites.</p>
        </div>



        <div className="second-container">
            <div className='photo-section1'>
                <img
                    src="https://images.unsplash.com/photo-1516012112827-b0347b5519f2?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top"
                    alt="Restaurant Image1"
                />
            </div>
            <p className='paragraphdetailar1'><h2>Architecture Unique</h2>
            L'architecture de la Casbah est un mélange captivant de styles mauresque, ottoman et andalou. Les ruelles tortueuses sont bordées de maisons blanchies à la chaux aux portes colorées et aux balcons en fer forgé. Les minarets des mosquées se dressent fièrement parmi les bâtiments, créant une silhouette distinctive.</p>
        </div>


        <div className="second-container">
            <div className='photo-section'>
                <img
                    src="https://images.unsplash.com/photo-1681072774533-662eb0780f95?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top"
                    alt="Restaurant Image1"
                />
            </div>
            <p className='paragraphdetailar'><h2>Vie Quotidienne</h2>
            La Casbah est un témoignage vivant de la vie traditionnelle algéroise. Les habitants, connus sous le nom de Casbahouis, préservent les traditions séculaires et le mode de vie communautaire. Les marchés animés offrent une variété de produits locaux, tandis que les artisans perpétuent des métiers traditionnels tels que la poterie, la menuiserie et la broderie.</p>
        </div>


    </div>
  );
};

export default PlusDetailsPlace;