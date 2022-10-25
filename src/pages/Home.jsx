import React from 'react';
import './Home.css';
import Header from '../components/header/Header';
import Intro from '../components/section/Intro';
import Annonces from '../components/annonces/Annonces';



function Home() {
  return (
    <React.Fragment>    
      <Header />
      <Intro /> 
      <Annonces />
    </React.Fragment>       
    
  );
}

export default Home;
