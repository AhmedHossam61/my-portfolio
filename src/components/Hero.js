import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Ahmed Hossam Abdelrahman</span></h1>
            <h2>AI / Machine Learning Engineer</h2>
            <p>AI/ML Engineer with hands-on experience in supervised & unsupervised learning, deep learning, and computer vision. Proficient in Python, TensorFlow, and Keras with a strong background in algorithm design and model optimization.</p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://drive.google.com/file/d/1u-k5WXkLcrXB-_pTqkl9ci7KkVcQhxyO/view?usp=sharing" alt="Ahmed Hossam abdelrahman" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;