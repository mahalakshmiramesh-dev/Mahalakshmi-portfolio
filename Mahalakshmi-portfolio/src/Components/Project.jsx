function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-title">
        <p>MY PROJECTS</p>
        <h2>What I Have Built</h2>
      </div>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <div className="project-number">01</div>

          <h3>
            Intelligent Geospatial Authentication and Fraud Prevention System
          </h3>

          <p>
            Designed and implemented a system that integrates mobile networks
            with real-time location analytics to prevent fraudulent credit
            and debit card transactions. Enhanced transaction security by
            validating user location data before authorization.
          </p>

          <div className="project-tech">
            <span>Java</span>
            <span>Microsoft SQL</span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-number">02</div>

          <h3>Website Design & Development</h3>

          <p>
            Designed the website UI/UX in Figma and converted the design into
            a functional responsive website using front-end technologies.
            Implemented user-friendly layouts and interactive web components.
          </p>

          <div className="project-tech">
            <span>Figma</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;