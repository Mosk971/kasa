import React from "react";
import { useParams } from "react-router-dom";

import annonceData from "../../assets/data/Data";


import "./House.css";
import Slider from "../../components/slider/Slider";
import Collapse from "../../components/collapse/Collapse";
import Tag from "../../components/tag/Tag";
import Rating from "../../components/rating/Rating";
import Error    from "../error/Error";


function House() {
  let { id } = useParams();
  // get the house from the data
  let detailsLogement = annonceData.find((annonceData2) => (annonceData2.id === id)); 
  
  // check if the house exist
  if(detailsLogement !== undefined) {

      // set the house images and then return the code
      let imageSlider = detailsLogement.pictures;

      return (
          <div className="container-housing">
              <Slider imageSlider={imageSlider}/>


              
              <div className="container-infos">

                    {/* set title then map the tags */}
                  <div className="left-details detail-product">
                      <h2>{detailsLogement.title}</h2>
                      <p className='city'>{detailsLogement.location}</p>
                      <div className='tag'>
                      {detailsLogement.tags.map((item) => <Tag key={item} tagTitle={item}></Tag> )}
                      </div>
                  </div>

                  {/* set the house host name and their picture and using the name and title as an alt */}
                  <div className="right-details detail-product">
                      <div className="container-owner">
                          <p className='owner-name'>{detailsLogement.host.name}</p>
                          <img className='owner-picture' src={detailsLogement.host.picture} alt={"Logement + " + detailsLogement.title}/>
                      </div>
                       <Rating ratingValue={+detailsLogement.rating} /> {/*// setting value */}
                  </div>

              </div>
{/* setting house equipments */}
              <div className="collapse-product">
                  <Collapse className="collapse-housing" titleCollapse={"Description"} children={detailsLogement.description}/>
                  <Collapse className="collapse-housing" titleCollapse={"Équipements"} children={detailsLogement.equipments.map((item) => <li key={item}>{item}</li>)}/>
              </div>
          </div>
      );

  } return <Error />
};

export default House;
