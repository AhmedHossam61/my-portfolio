import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content-no-image">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm an AI/ML Engineer with hands-on experience in supervised & unsupervised learning, 
              deep learning, and computer vision. I'm proficient in Python, TensorFlow, and Keras, 
              with experience in deploying ML models via Streamlit and GitHub.
            </p>
            <p>
              As a former Google Developer Student Club (GDSC) Founder & Lead, I organized 12+ AI workshops 
              attended by over 300 students and managed a 25-member technical team. I'm passionate about 
              turning complex AI problems into practical solutions that make a real impact.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>6+</h3>
                <p>ML Projects Completed</p>
              </div>
              <div className="stat">
                <h3>1+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>200+</h3>
                <p>Students Trained</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;