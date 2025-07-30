import React, { useState, useEffect } from 'react';
import './PortfolioLanding.css';
import ProfilePicture from './ProfilePicture';
import ParticleBackground from './ParticleBackground';
import profileImage from '../assets/Profile.jpg';
import schedWizImage from '../assets/SchedWiz.png';
import frenzyImage from '../assets/Frenzy.png';
import usImage from '../assets/US.png';

type PageType = 'home' | 'about' | 'career' | 'internship' | 'job' | 'lead-analyst' | 'senior-analyst' | 'projects' | 'contact' | 'experience';

const PortfolioLanding: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const roles = [
    "Data Analyst",
    "Patent Analyst", 
    "Problem Solver",
    "Tech Enthusiast"
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/varun-rao-719506245/', icon: '💼', color: '#0077B5' },
    { name: 'GitHub', url: 'https://github.com/Varunrao03', icon: '💻', color: '#333333' },
    { name: 'Email', url: 'varunrao0301@gmail.com', icon: '📧', color: '#EA4335' }
  ];

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsLoaded(true), 100);

    // Auto-rotate roles
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavigation = (page: PageType) => {
    setCurrentPage(page);
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="portfolio-container">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated background elements */}
      <div className="background-elements">
        <div 
          className="floating-element floating-element--1"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
        <div 
          className="floating-element floating-element--2"
          style={{
            transform: `translate(${mousePosition.x * -0.005}px, ${mousePosition.y * -0.005}px)`
          }}
        />
        <div 
          className="floating-element floating-element--3"
          style={{
            transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * -0.008}px)`
          }}
        />
      </div>

      {/* Navigation - Only show on pages other than home */}
      {(currentPage as string) !== 'home' && (
        <nav className="main-navigation">
          <button 
            className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavigation('home')}
          >
            HOME
          </button>
          <button 
            className={`nav-btn ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavigation('about')}
          >
            ABOUT
          </button>
          <button 
            className={`nav-btn ${currentPage === 'career' ? 'active' : ''}`}
            onClick={() => handleNavigation('career')}
          >
            CAREER
          </button>
          <button 
            className={`nav-btn ${currentPage === 'internship' || currentPage === 'job' || currentPage === 'lead-analyst' ? 'active' : ''}`}
            onClick={() => handleNavigation('internship')}
          >
            EXPERIENCE
          </button>
          <button 
            className={`nav-btn ${currentPage === 'projects' ? 'active' : ''}`}
            onClick={() => handleNavigation('projects')}
          >
            PROJECTS
          </button>
          <button 
            className={`nav-btn ${currentPage === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavigation('contact')}
          >
            CONTACT
          </button>
        </nav>
      )}

      {/* Home Page */}
      {currentPage === 'home' && (
        <section className={`hero-section ${isLoaded ? 'hero-section--loaded' : ''}`}>
          {/* Floating Background Elements */}
          <div className="floating-element floating-element--1"></div>
          <div className="floating-element floating-element--2"></div>
          <div className="floating-element floating-element--3"></div>
          
          {/* Molecule Effects */}
          <div className="molecule-container">
            {/* Molecule 1 - Triangle */}
            <div className="molecule molecule-1">
              <div className="atom"></div>
              <div className="atom secondary"></div>
              <div className="atom"></div>
              <div className="bond"></div>
              <div className="bond"></div>
              <div className="bond"></div>
            </div>

            {/* Molecule 2 - Linear Chain */}
            <div className="molecule molecule-2">
              <div className="atom"></div>
              <div className="atom secondary"></div>
              <div className="atom"></div>
              <div className="atom secondary"></div>
              <div className="bond"></div>
              <div className="bond"></div>
              <div className="bond"></div>
            </div>

            {/* Molecule 3 - Pentagon */}
            <div className="molecule molecule-3">
              <div className="atom"></div>
              <div className="atom secondary"></div>
              <div className="atom"></div>
              <div className="atom secondary"></div>
              <div className="atom"></div>
              <div className="bond"></div>
              <div className="bond"></div>
              <div className="bond"></div>
              <div className="bond"></div>
              <div className="bond"></div>
            </div>

            {/* Molecule 4 - Y Formation */}
            <div className="molecule molecule-4">
              <div className="atom"></div>
              <div className="atom secondary"></div>
              <div className="atom secondary"></div>
              <div className="atom"></div>
              <div className="bond"></div>
              <div className="bond"></div>
              <div className="bond"></div>
            </div>

            {/* Molecule 5 - Diamond */}
            <div className="molecule molecule-5">
              <div className="atom"></div>
              <div className="atom secondary"></div>
              <div className="atom secondary"></div>
              <div className="atom"></div>
              <div className="bond"></div>
              <div className="bond"></div>
              <div className="bond"></div>
              <div className="bond"></div>
            </div>
          </div>
          
          <div className="hero-content">
            {/* Profile Picture with animation */}
            <div className="profile-section">
              <ProfilePicture src={profileImage} alt="Varun Prasanna Rao" size="large" />
              <div className="profile-glow" />
            </div>

            {/* Animated Name */}
            <h1 className={`name ${isLoaded ? 'name--loaded' : ''}`}>
              {'VARUN PRASANNA RAO'.split('').map((letter, index) => (
                <span
                  key={index}
                  className="name-letter"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    marginRight: letter === ' ' ? '0.3em' : '0.1em'
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>

            {/* Dynamic Roles */}
            <div className="roles-container">
              <p className={`titles ${isLoaded ? 'titles--loaded' : ''}`}>
                <span className="role-text">{roles[currentRole]}</span>
                <span className="cursor">|</span>
              </p>
            </div>

            {/* Interactive Social Links */}
            <div className={`social-links ${isLoaded ? 'social-links--loaded' : ''}`}>
              {socialLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="social-link-wrapper"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <a
                    href={link.url}
                    className="social-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSocialClick(link.url);
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-icon">{link.icon}</span>
                    {link.name}
                  </a>
                </div>
              ))}
            </div>

            {/* Animated Tagline */}
            <p className={`tagline ${isLoaded ? 'tagline--loaded' : ''}`}>
              Step into my world filled with tech and creativity...
              <span className="typing-cursor">|</span>
            </p>

            {/* Enhanced Navigation Button */}
            <button
              className={`nav-button ${isLoaded ? 'nav-button--loaded' : ''}`}
              onClick={() => handleNavigation('about')}
            >
              <span> Explore More →</span>
            </button>
          </div>
        </section>
      )}

      {/* About Page */}
      {currentPage === 'about' && (
        <section className={`about-section ${isLoaded ? 'about-section--loaded' : ''}`}>
          <div className="section-content">
            {/* About Page Navigation */}
            <nav className="about-page-navigation">
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('home')}
              >
                HOME
              </button>
              <button 
                className="nav-btn active"
                onClick={() => handleNavigation('about')}
              >
                ABOUT
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('career')}
              >
                CAREER
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('internship')}
              >
                EXPERIENCE
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('projects')}
              >
                PROJECTS
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('contact')}
              >
                CONTACT
              </button>
            </nav>

            <h2 className="section-title">About Me</h2>
            
            <div className="about-content">
              <div className="about-text">
                <p>
                A Data Analyst professional with 2+ years of experience and a strong engineering background. I specialize in leveraging data analysis and AI to transform complex data into impactful, research-backed insights across diverse industries. Driven by the strategic insights data can provide, I am eager to secure a role that allows me to expand my analytical capabilities and contribute meaningfully to this evolving field.
                </p>
                <p>
                  I also specialize in creating comprehensive analytical solutions that drive business decisions and conducting 
                  thorough patent research to support innovation strategies.
                </p>
              </div>
              
              <div className="about-attributes">
                <div className="attribute-item">
                  <div className="attribute-icon">🎯</div>
                  <h3>Problem Solver</h3>
                </div>
                <div className="attribute-item">
                  <div className="attribute-icon">📊</div>
                  <h3>Data Driven</h3>
                </div>
                <div className="attribute-item">
                  <div className="attribute-icon">💡</div>
                  <h3>Innovation Focused</h3>
                </div>
              </div>
            </div>
            
            <div className="about-navigation">
              <button className="about-nav-button" onClick={() => handleNavigation('career')}>
                <span>Continue to Career</span>
                <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Career Page */}
      {currentPage === 'career' && (
        <section className={`career-section ${isLoaded ? 'career-section--loaded' : ''}`}>
          <div className="section-content">
            {/* Career Page Navigation */}
            <nav className="career-page-navigation">
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('home')}
              >
                HOME
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('about')}
              >
                ABOUT
              </button>
              <button 
                className="nav-btn active"
                onClick={() => handleNavigation('career')}
              >
                CAREER
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('internship')}
              >
                EXPERIENCE
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('projects')}
              >
                PROJECTS
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('contact')}
              >
                CONTACT
              </button>
            </nav>

            <div className="career-content">
              <h2 className="career-title">Beginning of my career....</h2>
              <div className="career-divider"></div>

              <div className="education-cards">
                <div className="education-item">
                  <p className="intro-text">
                    Started my career the same way every Indian students start which is opting into an Engineering Background.
                  </p>
                  <div className="education-card">
                    <div className="card-content">
                      <h3 className="degree-title">Bachelors in Electronics and telecommunication Engineering</h3>
                      <p className="institution">RAIT DY PATIL</p>
                      <p className="location">Navi Mumbai, MH - India</p>
                      <p className="duration">2019-2023</p>
                      <p className="gpa">GPA: 3.52</p>
                      <div className="student-name">Varun Prasanna Rao</div>
                    </div>
                  </div>
                </div>

                <div className="education-item">
                  <p className="intro-text">
                    Moved on to the next chapter of my life, pursuing Masters from the USA
                  </p>
                  <div className="education-card">
                    <div className="card-content">
                      <h3 className="degree-title">Master's of Science in Business Analytics</h3>
                      <p className="institution">University of California, Davis</p>
                      <p className="location">San Francisco, CA - USA</p>
                      <p className="duration">2024-2025</p>
                      <p className="gpa">GPA: 3.4</p>
                      <div className="student-name">Varun Prasanna Rao</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="career-footer">
                <p className="footer-text">
                  But what about my work experience, let's learn about that....
                </p>
                <button className="career-nav-button" onClick={() => handleNavigation('internship')}>
                  
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Internship Page */}
      {currentPage === 'internship' && (
        <section className={`internship-section ${isLoaded ? 'internship-section--loaded' : ''}`}>
          <div className="section-content">
            {/* Internship Page Navigation */}
            <nav className="internship-page-navigation">
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('home')}
              >
                HOME
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('about')}
              >
                ABOUT
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('career')}
              >
                CAREER
              </button>
              <button 
                className="nav-btn active"
                onClick={() => handleNavigation('internship')}
              >
                EXPERIENCE
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('projects')}
              >
                PROJECTS
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('contact')}
              >
                CONTACT
              </button>
            </nav>

            <div className="internship-header">
              <h2 className="internship-title">Landed my first ever Internship at....</h2>
            </div>
            
            <div className="internship-divider"></div>
            
            <div className="internship-content">
              <div className="company-info">
                <h3 className="company-name">Ernst & Young India,</h3>
                <p className="company-location">Mumbai, India</p>
                <p className="internship-duration">Jun 2022 - Aug 2022</p>
              </div>
              
              <div className="job-details">
                <h4 className="job-title">Title : Data Analytics Intern</h4>
                <h5 className="job-description-title">Job Description:</h5>
                <ul className="job-responsibilities">
                  <li>Developed interactive Power BI dashboards using provided datasets, empowering the insurance client to gain actionable insights into flood data for enhanced risk assessment and informed decision-making.</li>
                  <li>Conducted in-depth analysis of flood impact trends across multiple regions, enabling the client to identify risk patterns and refine policy offerings through historical and predictive data insights.</li>
                  <li>Published a blog post highlighting observed trends and visualizations, demonstrating how insurance companies worldwide respond to flood events, fostering industry transparency and knowledge-sharing.</li>
                </ul>
              </div>
            </div>
            
            <div className="internship-footer">
              <button className="internship-btn" onClick={() => {
                window.open('https://github.com/Varunrao03/Ernst-Young-Internship', '_blank', 'noopener,noreferrer');
              }}>
                Link to my work at Ernst & Young India
              </button>
              <button className="internship-btn" onClick={() => handleNavigation('job')}>
                What Next?
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Job Page */}
      {currentPage === 'job' && (
        <section className={`job-section ${isLoaded ? 'job-section--loaded' : ''}`}>
          <div className="section-content">
            {/* Job Page Navigation */}
            <nav className="job-page-navigation">
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('home')}
              >
                HOME
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('about')}
              >
                ABOUT
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('career')}
              >
                CAREER
              </button>
              <button 
                className="nav-btn active"
                onClick={() => handleNavigation('internship')}
              >
                EXPERIENCE
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('projects')}
              >
                PROJECTS
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('contact')}
              >
                CONTACT
              </button>
            </nav>

            <div className="job-header">
              <h2 className="job-title-header">Landed my first ever Job at....</h2>
            </div>
            
            <div className="job-divider"></div>
            
            <div className="job-content">
              <div className="company-info">
                <h3 className="company-name">Researchwire Knowledge Solution Pvt. Ltd.,</h3>
                <p className="company-location">Mumbai, India</p>
                <p className="job-duration">Sept 2023 - Aug 2024</p>
              </div>
              
              <div className="job-details">
                <h4 className="job-title">Title : Patent Analyst</h4>
                <h5 className="job-description-title">Job Description:</h5>
                <ul className="job-responsibilities">
                  <li>Conducted comprehensive data analysis and interpretation, delivering over 30 IP assessments, including FTO and patentability evaluations for telecommunication (VoIP) and software (SDLC) innovations, and analyzing over 500 market and patent trends.</li>
                  <li>Led to a 30% revenue increase by accurately identifying and mitigating infringement risks, thereby protecting stakeholders from legal actions.</li>
                  <li>Beyond developing 10+ Power BI dashboards, I leveraged my data storytelling skills to produce comprehensive technical reports, effectively communicating insights derived from data analysis.</li>
                </ul>
              </div>
            </div>
            
            <div className="job-footer">
              <button className="job-btn previous-btn" onClick={() => handleNavigation('internship')}>
                Previous
              </button>
              <button className="job-btn" onClick={() => handleNavigation('lead-analyst')}>
                And then...
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Lead Data Analyst Page */}
      {currentPage === 'lead-analyst' && (
        <section className={`lead-analyst-section ${isLoaded ? 'lead-analyst-section--loaded' : ''}`}>
          <div className="section-content">
            {/* Lead Analyst Page Navigation */}
            <nav className="lead-analyst-page-navigation">
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('home')}
              >
                HOME
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('about')}
              >
                ABOUT
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('career')}
              >
                CAREER
              </button>
              <button 
                className="nav-btn active"
                onClick={() => handleNavigation('internship')}
              >
                EXPERIENCE
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('projects')}
              >
                PROJECTS
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('contact')}
              >
                CONTACT
              </button>
            </nav>

            <div className="lead-analyst-header">
              <h2 className="lead-analyst-title">A big exposure working in the US at......</h2>
            </div>

            <div className="lead-analyst-divider"></div>

            <div className="lead-analyst-content">
              <div className="lead-analyst-details">
                <h3 className="role-title">BroadVision Marketing</h3>
                <p className="company"></p>
                <p className="location">San Francisco, CA - USA</p>
                <p className="duration">August 2024 - June 2025</p>
                
                <div className="responsibilities">
                <h4 className="job-title">Title : Lead Data Analyst</h4>
                <h5 className="job-description-title">Job Description:</h5>
                  <ul>
                    <li>Analyzed data-driven research and SEO metric analysis for a digital marketing firm, producing a 20-page report with actionable recommendations. This work is projected to reduce client dependence on paid advertising by 25%.</li>
                    <li>Carried out regression and clustering analysis on a dataset of 200+ attorney firms to evaluate the impact of Number of blogs on organic search rankings, providing data-driven insights.</li>
                    <li>Identified a strategy to potentially improve search engine positioning by an average of 20-rank through implementation of weekly blogging practices, enhancing the online visibility.</li>
                    
                  </ul>
                </div>
              </div>
            </div>

            <div className="lead-analyst-footer">
              <button className="lead-analyst-nav-button previous-btn" onClick={() => handleNavigation('job')}>
                <span className="arrow">Previous</span>
              </button>
              <button className="lead-analyst-nav-button" onClick={() => handleNavigation('senior-analyst')}>
                <span className="arrow">Continued to...</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Senior Data Analyst Page */}
      {currentPage === 'senior-analyst' && (
        <section className={`senior-analyst-section ${isLoaded ? 'senior-analyst-section--loaded' : ''}`}>
          <div className="section-content">
            {/* Senior Analyst Page Navigation */}
            <nav className="senior-analyst-page-navigation">
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('home')}
              >
                HOME
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('about')}
              >
                ABOUT
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('career')}
              >
                CAREER
              </button>
              <button 
                className="nav-btn active"
                onClick={() => handleNavigation('internship')}
              >
                EXPERIENCE
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('projects')}
              >
                PROJECTS
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('contact')}
              >
                CONTACT
              </button>
            </nav>

            <div className="senior-analyst-header">
              <h2 className="senior-analyst-title">Another achievement landing an Internship at..</h2>
            </div>

            <div className="senior-analyst-divider"></div>

            <div className="senior-analyst-content">
              <div className="senior-analyst-details">
                <h3 className="role-title">Guardian Airwaves LLC</h3>
                <p className="company"></p>
                <p className="location">San Francisco, CA - USA</p>
                <p className="duration">June 2025 - Present</p>
                
                <div className="responsibilities">
                <h4 className="job-title">Title : AI Software Engineer Intern</h4>
                <h5 className="job-description-title">Job Description:</h5>
                  <ul>
                    <li>Engineered and implemented Python-based data extraction modules for NLP models, enabling automatic on-screen data capture and laying the foundation for advanced machine learning applications.</li>
                    <li>Delivered in-depth research and initial development for Agentic AI-powered systems, exploring cutting-edge methodologies for intelligent automation and data-driven decision-making.s</li>
                    <li>Developed user interfaces for data visualization, facilitating intuitive presentation of insights, and collaborated cross-functionally using Jira/Confluence to integrate data and AI solutions into product features, including upcoming conversational AI.</li>
                    
                  </ul>
                </div>
              </div>
            </div>

            <div className="senior-analyst-footer">
              <p className="footer-text">
                Now let's explore some of the projects I've worked on....
              </p>
              <button className="senior-analyst-nav-button" onClick={() => handleNavigation('projects')}>
                <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Projects Page */}
      {currentPage === 'projects' && (
        <section className={`projects-section ${isLoaded ? 'projects-section--loaded' : ''}`}>
          <div className="section-content">
            {/* Projects Page Navigation */}
            <nav className="projects-page-navigation">
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('home')}
              >
                HOME
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('about')}
              >
                ABOUT
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('career')}
              >
                CAREER
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('internship')}
              >
                EXPERIENCE
              </button>
              <button 
                className="nav-btn active"
                onClick={() => handleNavigation('projects')}
              >
                PROJECTS
              </button>
              <button 
                className="nav-btn"
                onClick={() => handleNavigation('contact')}
              >
                CONTACT
              </button>
            </nav>

            <div className="projects-divider"></div>

            <div className="projects-content">
              {/* Project Hero Section */}
              <div className="project-hero">
                <img 
                  src={schedWizImage} 
                  alt="AI Resume Job Recommendation System" 
                  className="project-hero-image"
                />
              </div>

              {/* Project Details */}
              <div className="project-details">
                <h1 className="project-main-title">SchedWiz - AI Scheduling Assistant</h1>
                
                <p className="project-description">
                In today’s fast-paced world, people juggle numerous tasks but often struggle to manage them effectively due to a lack of proper scheduling and task management. Our system helps you stay on top of your responsibilities by prioritizing the most important tasks, ensuring focused and efficient completion. There are many possible use cases, one of the most relevant is an academic Schedule Builder. Let's take a closer look at how your personalized Schedule Builder works.
                </p>

                {/* Technology Tags */}
                <div className="tech-tags">
                  <span className="tech-tag">NLP</span>
                  <span className="tech-tag">PySpark</span>
                  <span className="tech-tag">MLP</span>
                  <span className="tech-tag">Streamlit</span>
                </div>

                {/* Source Code Section */}
                <div className="source-code-section">
                  <a 
                    href="https://github.com/Varunrao03/SchedWiz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="source-code-header"
                  >
                    <svg className="github-icon" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="source-code-text">Source Code</span>
                  </a>
                </div>


              </div>

              {/* Project 2: Frenzy Compass */}
              <div className="project-separator"></div>
              
              <div className="project-hero">
                <img 
                  src={frenzyImage} 
                  alt="Frenzy Compass Travel Recommendation System" 
                  className="project-hero-image"
                />
              </div>

              <div className="project-details">
                <h1 className="project-main-title">Frenzy Compass - Travel Recommendation System</h1>
                
                <p className="project-description">
                The Frenzy Compass – An Affordable Travel Guide is a software that will help students efficiently plan their day out by suggesting them nearby activities, restaurants, and essential services based on their budget and locality when they are new to a city.</p>

                <p className="project-description">
                Location-Based Recommendations : Suggest nearby places (restaurants , events, grocery). </p>
                <p className="project-description">
                ​Budget & Preference Filters : Allow filtering based on budget and activity type. </p>
                <p className="project-description">
                ​Travel Time Optimization : Use Google Maps API to recommend the shortest travel routes. </p>
                

                <p className="project-description">
                To build this software we utilize several Google Maps APIs and Ticketmaster API to enhance student experience:
                </p>

                <p className="project-description">
                Google Maps API: Powers interactive maps for location viewing and route planning. JavaScript Map API: Embeds dynamic maps on the web interface for user interaction. Geocoding API: Converts addresses into geographic coordinates for precise location search. Places API: Finds nearby places like restaurants and grocery, filtered by user preferences. Geolocation API: Detects the user's current location for personalized recommendations. Ticketmaster API: The Ticketmaster Discovery API allows you to search for events, attractions, or venues.​
                </p>

                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Machine Learning</span>
                  <span className="tech-tag">Collaborative Filtering</span>
                  <span className="tech-tag">REST APIs</span>
                  
                </div>

                <div className="source-code-section">
                  <a 
                    href="https://github.com/Varunrao03/Frenzy-Compass" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="source-code-header"
                  >
                    <svg className="github-icon" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="source-code-text">Source Code</span>
                  </a>
                </div>
               </div>

              {/* Project 3: U.S. Natural Disaster */}
              <div className="project-separator"></div>
              
              <div className="project-hero">
                <img 
                  src={usImage} 
                  alt="U.S. Natural Disaster Analysis System" 
                  className="project-hero-image"
                />
              </div>

              <div className="project-details">
                <h1 className="project-main-title">U.S. Natural Disaster - Predictive Analysis System</h1>
                
                <p className="project-description">
                The analysis focuses on understanding the disaster trends across the US using Power BI and Looker for visualising disaster trends and MySQL to write SQL queries, enabling insights into patterns, correlations, and predictions. The dataset I have selected focuses on natural calamities observed across the United States. The primary goal of this analysis is to identify the states most affected by various natural disasters. The dataset includes key columns such as the state impacted, the type of incident (e.g., Tornado, Tsunami), the designated area affected within the state, and additional relevant details.
                </p>

                <div className="tech-tags">
                  <span className="tech-tag">Data Analysis</span>
                  <span className="tech-tag">Tableau</span>
                  <span className="tech-tag">SQL</span>
                  <span className="tech-tag">Looker</span>
                </div>

                <div className="source-code-section">
                  <a 
                    href="https://github.com/Varunrao03/US-National-Disaster-Analysis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="source-code-header"
                  >
                    <svg className="github-icon" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="source-code-text">Source Code</span>
                  </a>
                </div>
               </div>

              {/* Project 4: Churn Prediction */}
              <div className="project-separator"></div>
              
              <div className="project-hero">
                <div className="project-placeholder-hero">
                  <div className="placeholder-content">
                    <svg className="placeholder-icon" viewBox="0 0 24 24" width="80" height="80">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="placeholder-text">Churn Prediction System</span>
                  </div>
                </div>
              </div>

              <div className="project-details">
                <h1 className="project-main-title">Churn Prediction - Customer Retention Analytics</h1>
                
                <p className="project-description">
                  A sophisticated machine learning system designed to predict customer churn and identify at-risk 
                  customers before they leave. The system analyzes customer behavior patterns, transaction history, 
                  and engagement metrics to provide actionable insights for retention strategies. Features include 
                  real-time risk scoring, automated alerts, and personalized retention recommendations to help 
                  businesses maintain customer loyalty and reduce churn rates effectively.
                </p>

                <div className="tech-tags">
                  <span className="tech-tag">Machine Learning</span>
                  <span className="tech-tag">Random Forest</span>
                  <span className="tech-tag">Feature Engineering</span>
                  <span className="tech-tag">Model Evaluation</span>
                  <span className="tech-tag">Business Intelligence</span>
                </div>

                <div className="source-code-section">
                  <a 
                    href="https://github.com/Varunrao03/Churn-Prediction" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="source-code-header"
                  >
                    <svg className="github-icon" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="source-code-text">Source Code</span>
                  </a>
                </div>
               </div>

              {/* Projects to Contact Navigation Button */}
              <div className="projects-contact-navigation">
                <button 
                  className="projects-contact-btn"
                  onClick={() => handleNavigation('contact')}
                >
                  <span className="btn-text">Get In Touch</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Page */}
      {currentPage === 'contact' && (
        <section className={`contact-section ${isLoaded ? 'contact-section--loaded' : ''}`}>
          {/* Contact Page Navigation */}
          <nav className="contact-page-navigation">
            <button 
              className={`nav-btn ${(currentPage as string) === 'home' ? 'active' : ''}`}
              onClick={() => handleNavigation('home')}
            >
              HOME
            </button>
            <button 
              className={`nav-btn ${(currentPage as string) === 'about' ? 'active' : ''}`}
              onClick={() => handleNavigation('about')}
            >
              ABOUT
            </button>
            <button 
              className={`nav-btn ${(currentPage as string) === 'career' ? 'active' : ''}`}
              onClick={() => handleNavigation('career')}
            >
              CAREER
            </button>
            <button 
              className={`nav-btn ${(currentPage as string) === 'internship' || (currentPage as string) === 'job' || (currentPage as string) === 'lead-analyst' || (currentPage as string) === 'senior-analyst' ? 'active' : ''}`}
              onClick={() => handleNavigation('internship')}
            >
              EXPERIENCE
            </button>
            <button 
              className={`nav-btn ${(currentPage as string) === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavigation('projects')}
            >
              PROJECTS
            </button>
            <button 
              className={`nav-btn ${(currentPage as string) === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavigation('contact')}
            >
              CONTACT
            </button>
          </nav>
          
          {/* Floating Background Elements */}
          <div className="floating-element floating-element--1"></div>
          <div className="floating-element floating-element--2"></div>
          <div className="floating-element floating-element--3"></div>
          
          {/* Molecule Effects */}
          <div className="molecule-container">
            {/* Molecule 1 - Triangle */}
            <div className="molecule molecule-1">
              <div className="atom"></div>
              <div className="atom secondary"></div>
              <div className="atom"></div>
              <div className="bond"></div>
              <div className="bond"></div>
              <div className="bond"></div>
            </div>

            {/* Molecule 2 - Linear Chain */}
            <div className="molecule molecule-2">
              <div className="atom"></div>
              <div className="atom secondary"></div>
              <div className="atom"></div>
              <div className="atom secondary"></div>
              <div className="bond"></div>
              <div className="bond"></div>
              <div className="bond"></div>
            </div>

            {/* Molecule 3 - Pentagon */}
            <div className="molecule molecule-3">
              <div className="atom"></div>
              <div className="atom secondary"></div>
              <div className="atom"></div>
              <div className="atom secondary"></div>
              <div className="atom"></div>
              <div className="bond"></div>
              <div className="bond"></div>
              <div className="bond"></div>
              <div className="bond"></div>
              <div className="bond"></div>
            </div>

            {/* Molecule 4 - Y Formation */}
            <div className="molecule molecule-4">
              <div className="atom"></div>
              <div className="atom secondary"></div>
              <div className="atom secondary"></div>
              <div className="atom"></div>
              <div className="bond"></div>
              <div className="bond"></div>
              <div className="bond"></div>
            </div>

            {/* Molecule 5 - Diamond */}
            <div className="molecule molecule-5">
              <div className="atom"></div>
              <div className="atom secondary"></div>
              <div className="atom secondary"></div>
              <div className="atom"></div>
              <div className="bond"></div>
              <div className="bond"></div>
              <div className="bond"></div>
              <div className="bond"></div>
            </div>
          </div>
          
          <div className="section-content">
            <h2 className="section-title">Get In Touch</h2>
            
            <div className="contact-content">
              <p>
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and innovation.
              </p>
              
              <div className="contact-info">
                <div className="contact-item" onClick={() => window.open('https://www.linkedin.com/in/varun-rao-719506245/', '_blank')}>
                  <div className="contact-icon">💼</div>
                  <div className="contact-details">
                    <h3>LinkedIn</h3>
                  </div>
                </div>
                
                <div className="contact-item" onClick={() => window.open('https://github.com/Varunrao03', '_blank')}>
                  <div className="contact-icon">💻</div>
                  <div className="contact-details">
                    <h3>GitHub</h3>
                  </div>
                </div>
              </div>
              
              <div className="contact-info-center">
                <div className="contact-item" onClick={() => window.open('tel:+16282979517', '_blank')}>
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <h3>Contact at</h3>
                    <p>+1 (628) 297-9517</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-buttons">
                <button className="contact-btn primary" onClick={() => window.open('mailto:your.email@example.com', '_blank')}>
                  Send Email
                </button>
                <button className="contact-btn secondary" onClick={() => handleNavigation('home')}>
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PortfolioLanding; 