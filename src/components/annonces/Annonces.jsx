import React from "react";
import "./Annonces.css";
import annonceData from "../../constant/data/Data";




function Annonces() {      
      
      annonceData.map((annonce) => {
        
        return (
          <div className="card" >            
            <div className="cardContent">              
                <img src={annonce.cover} alt="annonce" />
                <h3 className="cardTitle">{annonce.title}</h3>
            </div>
          </div>
        )
      })
}  






export default Annonces;