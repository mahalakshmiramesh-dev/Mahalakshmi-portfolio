function Journey() {
  return (
    <section className="journey" id="journey">
      <div className="section-title">
        <p>MY JOURNEY</p>
        <h2>Education & Training</h2>
      </div>

      <div className="timeline">

        {/* BCA */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span>2022 - 2025</span>

            <h3>Bachelor of Computer Application (BCA)</h3>

            <h4>EGS Pillay Arts & Science College, Nagapattinam</h4>

            <p>CGPA - 7.97</p>
          </div>
        </div>

        {/* Full Stack */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span>Full Stack Development</span>

            <h3>Full Stack Development Training</h3>

            <h4>Cadpoint Institute</h4>

            <p>
              Completed Full Stack Development training covering front-end,
              back-end, and database technologies, with hands-on project
              experience.
            </p>
          </div>
        </div>

        {/* Higher Secondary */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span>2021 - 2022</span>

            <h3>Higher Secondary - Class XII</h3>

            <h4>G.S.P.J Adharsh Matric Hr Sec School, Nagapattinam</h4>

            <p>Percentage - 65%</p>
          </div>
        </div>

        {/* SSLC */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span>2019 - 2020</span>

            <h3>SSLC - Class X</h3>

            <h4>G.S.P.J Adharsh Matric Hr Sec School, Nagapattinam</h4>

            <p>Percentage - 67%</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Journey;