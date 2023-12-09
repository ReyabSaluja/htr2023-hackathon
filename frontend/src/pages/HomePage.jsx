import React from 'react';
import Header from "../components/Header.jsx";
import Title from "../components/Title.jsx";
import childLearningImage from '../assets/images/child-learning.jpeg'; // Adjusted import path

function HomePage() {
  return (
    <>
      <div className="home">
        <Header />
      </div>
      
      <div className="title">
        <Title />
      </div>
      <img src={childLearningImage} className="homepage-image" alt="logo"/>
    </>
  );
}

export default HomePage;