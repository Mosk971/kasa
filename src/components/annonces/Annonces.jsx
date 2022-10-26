import React from "react";
import "./Annonces.css";
import annonceData from "../../assets/data/Data";




function Annonces() {      
 
    return(
      <section>        
      
        {annonceData.map((logement, k) => {
          return (
            <div key={logement.id} className="annonceContainer">
              <div className="annonceImage">
                <img src={logement.cover} alt="logement" />
              </div>
              <div className="annonceTitle">
                <h2>{logement.title}</h2>                
              </div>
            </div>
          );
        })}
      </section>
    )
  
}  






export default Annonces;