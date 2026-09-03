function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <p>CONTACT ME</p>
        <h2>Let's Connect</h2>
      </div>

      <div className="contact-container">

        <div className="contact-card">
          <span>Email</span>
          <h3>mahalakshmiramesh9344@gmail.com</h3>
          <a href="mailto:mahalakshmiramesh9344@gmail.com">
            Send Email
          </a>
        </div>

        <div className="contact-card">
          <span>Phone</span>
          <h3>9344821326</h3>
          <a href="tel:9344821326">
            Call Me
          </a>
        </div>

        <div className="contact-card">
          <span>Location</span>
          <h3>Nagapattinam</h3>
        </div>

      </div>
    </section>
  );
}

export default Contact;