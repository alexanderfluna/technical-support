import React from 'react';
import Slideshow from '../components/Slideshow';
import "../styles/MainContent.css";

const MainContent = () => {
  return (
    <main className="main-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Comnet Technical Support</h1>
          <p className="hero-subtitle">Find answers to common technical questions and get the help you need</p>
        </div>
      </section>
    </main>
  );
};

export default MainContent;