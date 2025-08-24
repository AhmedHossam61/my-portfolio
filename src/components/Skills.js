import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "AI/ML Domains",
      skills: [
        { name: "Deep Learning (CNNs, RNNs)", level: 90 },
        { name: "Computer Vision", level: 88 },
        { name: "Natural Language Processing", level: 80 },
        { name: "Generative AI", level: 85 },
        { name: "MLOps", level: 78 }
      ]
    },
    {
      category: "Programming & Frameworks",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Keras", level: 88 },
        { name: "Scikit-learn", level: 90 }
      ]
    },
    {
      category: "Tools & Cloud Platforms",
      skills: [
        { name: "AWS SageMaker", level: 80 },
        { name: "Docker", level: 60 },
        { name: "Streamlit", level: 85 },
        { name: "OpenCV", level: 88 },
        { name: "GitHub Actions", level: 80 }
      ]
    },
    {
      category: "Data Science",
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 92 },
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 85 },
        { name: "Feature Engineering", level: 80 }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;