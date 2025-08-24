import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Capacitive Seat for Cardiovascular Diseases",
      description: "Graduation project featuring real-time drowsiness detection, driver authentication, and ECG signal processing for cardiovascular anomaly detection.",
      technologies: ["Mediapipe", "OpenCV", "Signal Processing", "Python"],
      demoImage: "/project-demos/graduation-project.png",
      achievements: [
        "Developed 4 real-time drowsiness detection approaches",
        "Created driver authentication system using facial recognition",
        "Designed ECG signal processing pipeline for anomaly detection"
      ],
      githubLink: "https://github.com/AhmedHossam61/graduation-project"
    },
    {
      id: 2,
      title: "Facial Emotion Recognition",
      description: "CNN-based model for classifying facial emotions with real-time video detection capabilities.",
      technologies: ["TensorFlow", "CNN", "OpenCV", "Python"],
      demoImage: "/project-demos/emotioal_recognition.jpg",
      achievements: [
        "Achieved 92% classification accuracy",
        "Processed & augmented 10k+ labeled images",
        "Integrated OpenCV for live video-based emotion detection"
      ],
      githubLink: "https://github.com/AhmedHossam61/facial-emotion-recognition"
    },
    {
      id: 3,
      title: "Diabetes Classification",
      description: "Machine learning model for diabetes prediction with cloud deployment and real-time inference capabilities.",
      technologies: ["Python", "Scikit-learn", "Streamlit", "GitHub Actions"],
      demoImage: "/project-demos/Diabetes_detection.jpg",
      liveLink: "https://diabetes-classification-app.streamlit.app",
      achievements: [
        "Achieved 89% prediction accuracy with Naive Bayes",
        "Deployed as cloud-based web app using Streamlit",
        "Implemented comprehensive data preprocessing pipeline"
      ],
      githubLink: "https://github.com/AhmedHossam61/diabetes-classification"
    },
    {
      id: 4,
      title: "Candy Types Detection",
      description: "Real-time object detection system for identifying different candy types using YOLO and OpenCV.",
      technologies: ["YOLO", "CNN", "OpenCV", "PyTorch"],
      demoImage: "/project-demos/candy-detection.png",
      achievements: [
        "Gathered and annotated 200+ images for training",
        "Implemented real-time video detection pipeline",
        "Optimized for live monitoring applications"
      ],
      githubLink: "https://github.com/AhmedHossam61/candy-detection"
    }
  ];

  const openDemo = (project) => {
    setSelectedProject(project);
  };

  const closeDemo = () => {
    setSelectedProject(null);
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Selected Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.demoImage} alt={project.title} />
                <div className="project-overlay">
                  <button 
                    className="demo-btn"
                    onClick={() => openDemo(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  )}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="demo-modal" onClick={closeDemo}>
            <div className="demo-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeDemo}>×</button>
              <h3>{selectedProject.title}</h3>
              <img src={selectedProject.demoImage} alt={selectedProject.title} />
              <p>{selectedProject.description}</p>
              <div className="project-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {selectedProject.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="demo-links">
                {selectedProject.liveLink && (
                  <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
                    View Live Demo
                  </a>
                )}
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;