function About() {
  return (
    <section className="about" id="about">
      <div className="section-title">
        <p>ABOUT ME</p>
        <h2>Who I Am</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>Mahalakshmi R</h3>

          <p>
            Enthusiastic and detail-oriented BCA graduate seeking an
            entry-level opportunity in a reputed organization where I can
            utilize my technical knowledge, communication skills, and
            problem-solving abilities.
          </p>

          <p>
            I completed Full Stack Development training at Cadpoint
            Institute, covering front-end, back-end, and database
            technologies with hands-on project experience.
          </p>
        </div>

        <div className="about-card">
          <div>
            <span>Education</span>
            <h4>Bachelor of Computer Application (BCA)</h4>
            <p>EGS Pillay Arts & Science College, Nagapattinam</p>
            <p>CGPA: 7.97</p>
          </div>

          <div>
            <span>Training</span>
            <h4>Full Stack Development</h4>
            <p>Cadpoint Institute</p>
          </div>

          <div>
            <span>Location</span>
            <h4>Nagapattinam</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;