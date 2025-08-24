import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "ISchool-Demi Project",
      position: "Coding & AI Instructor",
      duration: "06/2024 – 08/2024",
      description: [
        "Taught programming basics to children (4 groups, 25 students per group, 2 sessions per week)",
        "Led children to achieve 90% success rate in their projects",
        "Developed engaging curriculum combining coding fundamentals with AI concepts"
      ],
      technologies: ["Python", "Teaching", "Curriculum Development", "AI Education"]
    },
    {
      company: "Electronics Research Institute (ERI)",
      position: "AI Engineer Intern",
      duration: "07/2023 – 08/2023",
      description: [
        "Implemented optimized A* pathfinding algorithm in Python, reducing computation time by 30%",
        "Applied algorithms for real-time robotic path navigation",
        "Studied machine learning and deep learning techniques in research environment"
      ],
      technologies: ["Python", "Algorithm Optimization", "Robotics", "Pathfinding"]
    }
  ];

  const achievements = [
    {
      title: "Kaggle ML Competition (AI Talents League)",
      description: "Ranked Top 50% among competitors",
      date: "06/2025"
    },
    {
      title: "Google Developer Student Club (GDSC)",
      description: "Founder & Lead (2022–2023), Team Member (2021–2022)",
      achievements: [
        "Organized 12+ AI workshops attended by over 300 students",
        "Managed a 25-member technical team",
        "Secured partnerships for training initiatives"
      ]
    }
  ];

  const education = [
    {
      institution: "Faculty of Engineering - Helwan University",
      degree: "Bachelor of Science (B.Sc.) in Electronics and Communications Engineering",
      duration: "09/2020 - 07/2025",
      gpa: "70% (Good)",
      coursework: "Machine Learning, Digital Signal Processing, Probability & Statistics, Neural Networks, Advanced Algorithms"
    }
  ];

  const certifications = [
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera by Andrew Ng",
      topics: "Supervised/Unsupervised Learning, Model Evaluation, Bias-Variance Tradeoff, Deep Learning, Reinforcement Learning"
    },
    {
      name: "Generative AI with AWS",
      issuer: "Udacity, 2024",
      topics: "Fine-tuned foundation models using Amazon Bedrock, Deployed LLMs on AWS SageMaker"
    },
    {
      name: "AI Fundamentals",
      issuer: "DataCamp, 2023",
      topics: "Core AI concepts and practical applications"
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2>Experience & Education</h2>
        
        <div className="experience-section">
          <h3>Work Experience</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <h4>{exp.position}</h4>
                    <span className="company">{exp.company}</span>
                    <span className="duration">{exp.duration}</span>
                  </div>
                  <ul className="experience-description">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                  <div className="experience-technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <h3>Leadership & Achievements</h3>
          <div className="achievements-list">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
                {achievement.date && <span className="date">{achievement.date}</span>}
                {achievement.achievements && (
                  <ul>
                    {achievement.achievements.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="education-section">
          <h3>Education</h3>
          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <h4>{edu.degree}</h4>
                <span className="institution">{edu.institution}</span>
                <span className="duration">{edu.duration}</span>
                <p><strong>GPA:</strong> {edu.gpa}</p>
                <p><strong>Relevant Coursework:</strong> {edu.coursework}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-section">
          <h3>Certifications & Courses</h3>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-item">
                <h4>{cert.name}</h4>
                <span className="issuer">{cert.issuer}</span>
                <p>{cert.topics}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;