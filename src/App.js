import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Error from './pages/error/Error';
import About from './pages/about/About';


function App() {
  return (
    <BrowserRouter>        
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />   
        <Route path="" element= {<Navigate to="/home" />}/>
        <Route path="/about"        element= {<About />}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
     
    </BrowserRouter>      
    
  );
}

export default App;