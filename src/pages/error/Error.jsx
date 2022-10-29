import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";



function Error() {
  return (
    <div className="error404Msg">
      <div className="wrapper404">
        <h1 className="text404">404</h1>
        <h2 className="Errormessage">Oups! La page que<br/>vous demandez n'existe pas</h2>
        <Link to ="/home" className="returnHome">Retourner sur la page d’accueil</Link>
      </div>
    </div>
  )
}


export default Error;