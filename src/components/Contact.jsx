import React from 'react';


const Contact = () => (
  <section id="contact" className="contact-section">
    <h2 className="contact-heading">Contact Me</h2>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit" className="submit-btn">Send Message</button>
    </form>
  </section>
);

export default Contact;
