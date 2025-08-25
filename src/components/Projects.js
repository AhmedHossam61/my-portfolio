import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Diabetes Classification Web App",
      description: "Machine learning model for diabetes prediction with cloud deployment and real-time inference capabilities.",
      technologies: ["Python", "Scikit-learn", "Streamlit", "GitHub Actions"],
      demoImage: "/project-demos/Diabetes_detection.jpg",
      liveLink: "https://diabetes-prediction-d7dftiyhavjbrrv3avotnu.streamlit.app/", // Your actual Streamlit app
      githubLink: "https://github.com/AhmedHossam61/Diabetes-prediction",
      achievements: [
        "Achieved 89% prediction accuracy with Naive Bayes",
        "Deployed as cloud-based web app using Streamlit",
        "Implemented comprehensive data preprocessing pipeline",
        "Real-time predictions with user-friendly interface"
      ]
    },
    {
      id: 2,
      title: "Facial Emotion Recognition",
      description: "CNN-based model for classifying facial emotions with real-time video detection capabilities.",
      technologies: ["TensorFlow", "CNN", "OpenCV", "Python", "Streamlit"],
      demoImage: "/project-demos/emotioal_recognition.jpg",
      liveLink: "https://emotion-recognition-ahmed.streamlit.app", // Deploy this on Streamlit
      githubLink: "https://github.com/AhmedHossam61/facial-emotion-recognition",
      achievements: [
        "Achieved 92% classification accuracy",
        "Processed & augmented 10k+ labeled images",
        "Integrated OpenCV for live video-based emotion detection",
        "Real-time webcam emotion detection"
      ]
    },
    {
      id: 3,
      title: "Candy Types Detection",
      description: "Real-time object detection system for identifying different candy types using YOLO and OpenCV.",
      technologies: ["YOLO", "CNN", "OpenCV", "PyTorch", "Streamlit"],
      demoImage: "/project-demos/candy-detection.png",
      liveLink: "https://candy-detector-ahmed.streamlit.app", // Deploy this on Streamlit
      githubLink: "https://github.com/AhmedHossam61/candy-detection",
      achievements: [
        "Gathered and annotated 200+ images for training",
        "Implemented real-time video detection pipeline",
        "Optimized for live monitoring applications",
        "Upload image or use webcam for detection"
      ]
    },
    {
      id: 4,
      title: "Graduation-Project | Capacitive Seat for Cardiovascular Diseases",
      description: "Graduation project featuring real-time drowsiness detection, driver authentication, and ECG signal processing for cardiovascular anomaly detection.",
      technologies: ["Mediapipe", "OpenCV", "Signal Processing", "Python"],
      demoImage: "/project-demos/graduation-project.png",
      // No live link for hardware project, but could add video demo
      demoVideo: "/project-demos/graduation-project-demo.mp4", 
      githubLink: "https://github.com/AhmedHossam61/Graduation-Project",
      achievements: [
        "Developed 4 real-time drowsiness detection approaches",
        "Created driver authentication system using facial recognition",
        "Designed ECG signal processing pipeline for anomaly detection",
        "Hardware-software integration for real-world application"
      ]
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
        <p className="projects-intro">
          Here are some of my AI/ML projects with live demos. Click "Try Live Demo" to interact with the applications!
        </p>
        
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
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="live-demo-btn"
                    >
                      Try Live Demo
                    </a>
                  )}
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
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="live-link"
                    >
                      🚀 Live Demo
                    </a>
                  )}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    📁 GitHub
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
              
              {/* Show video if available, otherwise show image */}
              {selectedProject.demoVideo ? (
                <video controls width="100%" style={{ maxHeight: '400px' }}>
                  <source src={selectedProject.demoVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={selectedProject.demoImage} alt={selectedProject.title} />
              )}
              
              <p>{selectedProject.description}</p>
              
              <div className="project-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {selectedProject.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-technologies">
                <h4>Technologies Used:</h4>
                <div className="technologies">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="demo-links">
                {selectedProject.liveLink && (
                  <a 
                    href={selectedProject.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-live-btn"
                  >
                    🚀 Try Live Demo
                  </a>
                )}
                <a 
                  href={selectedProject.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-github-btn"
                >
                  📁 View Code
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