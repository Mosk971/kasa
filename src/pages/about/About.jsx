import React from "react";

import IntroAbout from "../../components/banner/introAbout/IntroAbout";
import Collapse from "../../components/collapse/Collapse";

function About() {
    return (
        <div className="aboutWrapper">
            <IntroAbout />
            
            <Collapse titleCollapse="Fiabilité">
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
            </Collapse>

            <Collapse titleCollapse={"Respect"}>
                exclusion de notre plateforme.
            </Collapse>

            <Collapse titleCollapse={"Service"}>
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.    
            </Collapse>
            
            <Collapse titleCollapse={"Sécurité"}>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </Collapse>
        </div>
    );
    }

    export default About;