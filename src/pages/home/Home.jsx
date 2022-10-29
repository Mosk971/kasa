import React from 'react';

// import components
import Intro from '../../components/banner/introHome/Intro';
import Annonces from '../../components/annonces/Annonces';

// home page with intro and annonces components
function Home() {
  return (  
    <div className="homeContainer">
      <Intro />
      <Annonces />
    </div>
  );
};

export default Home;
