function Hero() {
  return (
    <section className="hero" id="home">

      {/* LEFT SIDE - CONTENT */}
      <div className="hero-content">
        <p className="hero-small">HELLO, I'M</p>

        <h1>
          Mahalakshmi
          <br />
          <span>Ramesh</span>
        </h1>

        <h2>BCA Graduate | Full Stack Developer Fresher</h2>

        <p className="hero-description">
          I'm passionate about web development and UI/UX design.
          I enjoy creating simple, creative and user-friendly digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Projects
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT SIDE - PROFILE IMAGE */}
      <div className="hero-image">
        <div className="image-circle">
          <img
            src="/images/profile.png"
            alt="Mahalakshmi Ramesh"
          />
        </div>
      </div>

    </section>
  );
}

export default Hero;