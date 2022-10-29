import React from "react";
import "./Annonces.css";
import annonceData from "../../assets/data/Data";




function Annonces() {      
 
    return(
      <section> 
        <div className="greyCardsBackground">     
          {annonceData.map((logement, k) => {
            return (            
                <a href={"/productPage/" + logement.id} key={logement.id} className="annonceContainer">
                  <div className="annonceImage">
                    <img src={logement.cover} alt="logement" />
                  </div>
                  <div className="annonceTitle">
                    <h2>{logement.title}</h2>
                  </div>
                </a>            
            );
          })}
        </div>
      </section>
      
    )
  
}  






export default Annonces;