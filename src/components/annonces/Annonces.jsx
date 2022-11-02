import React from "react";
import "./Annonces.css";
import annonceData from "../../assets/data/Data";
import { Link } from "react-router-dom";



function Annonces() {      
 
    return(
      <section> 
        <div className="greyCardsBackground">     
          {annonceData.map((logement, k) => {
            return (            
                <Link to={"/House/" + logement.id} key={logement.id} className="annonceContainer">
                  <div className="annonceImage">
                    <img src={logement.cover} alt={logement.title} />
                    
                  </div>
                  <div className="annonceTitle">
                    <h2>{logement.title}</h2>
                  </div>
                </Link>            
            );
          })}
        </div>
      </section>
      
    )
  
}  






export default Annonces;