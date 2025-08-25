import React from 'react';
import '../styles/ResumeDownload.css';

const ResumeDownload = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Ahmed_Hossam_Resume.pdf';
    link.download = 'Ahmed_Hossam_Abdelrahman_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume-download" id="resume">
      <div className="container">
        <h2>Resume</h2>
        <div className="resume-content">
          <p>
            Interested in my background in AI/ML engineering? Download my complete resume to learn more 
            about my experience in deep learning, computer vision, and machine learning projects.
          </p>
          <button className="download-btn" onClick={downloadResume}>
            <span className="download-icon">📄</span>
            Download Resume (PDF)
          </button>
          <div className="resume-highlights">
            <div className="highlight-item">
              <h4>🎓 Education</h4>
              <p>B.Sc. Electronics & Communications Engineering</p>
            </div>
            <div className="highlight-item">
              <h4>🏆 Achievements</h4>
              <p>Kaggle Competition Top 50%, GDSC Founder, 
                <p> 2 Rank at Favicon for AI inovation and Computer vision</p> 
              </p>
            </div>
            <div className="highlight-item">
              <h4>🔧 Specialties</h4>
              <p>Deep Learning, Computer Vision, NLP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeDownload;