import React from "react";
import "./portfolio.css";
import img from './Screenshot (9).png'
import img1 from './Screenshot (10).png'
import img2 from './Screenshot (11).png'
import image from './port.jpg'
import logo from './logo (2).png'
const projects = [
  {
    title: "Lawyer Management System",
    desc: "Full MERN app with auth, case management, appointments and payments.",
    img: img1,
  
  },
  {
    title: "Real Estate App",
    desc: "Property listings, search, filters and admin dashboard (MERN).",
    img: img,
    
  },
  {
    title: "YouTube Vanced Download Site",
    desc: "Landing page + SEO optimizations and multilingual support.",
    img: img2,
   
  },
];

export default function Portfolio() {
  const PHONE_NUMBER = "+923277375774"; // e.g. "923001234567"
  const whatsappMessage = encodeURIComponent("Hi! I checked your portfolio and would like to get in touch.");
  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="portfolio-container">
      <header className="header">
        <div className="header-content">
          <div className="brand">
            <img src={image} alt="Logo" className="logo" />
            <div className="brand-text">
              <h1>Esha Laraib</h1>
              <p>MERN Stack Developer</p>
            </div>
          </div>

          <nav className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">Message</a>
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-text">
            <h2>Hi — I'm Esha Laraib.</h2>
            <p className="lead">I build responsive, performant web apps with the MERN stack. I bring design sensibility .</p>

            <div className="hero-buttons">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="primary-btn">Contact on WhatsApp</a>
              <a href="#projects" className="secondary-btn">View Projects</a>
            </div>

            <ul className="meta">
              <li><strong>Location:</strong> Pakistan</li>
              <li><strong>Experience:</strong> 1 year (Marketing Booster) + MERN projects</li>
              <li><strong>Availability:</strong> Open to work</li>
            </ul>
          </div>

          <div className="hero-image">
            <img src={logo} alt="Real Estate App Screenshot" />
          </div>
        </section>

        <section id="projects" className="projects">
          <h3>Selected Projects</h3>
          <p className="section-sub">A few highlights that show UI, backend and SEO skills.</p>

          <div className="project-grid">
            {projects.map((p) => (
              <article key={p.title} className="project-card">
                <img src={p.img} alt={p.title} className="project-img" />
                <div className="project-body">
                  <h4>{p.title}</h4>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-links">
                    <a href={p.live} target="_blank" rel="noopener noreferrer">Live</a>
                    <a href={p.repo} target="_blank" rel="noopener noreferrer">Repo</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="skills">
          <h3>Skills</h3>
          <div className="skill-list">
            {["React", "Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript", "REST API", "JWT"].map((s) => (
              <span key={s} className="skill">{s}</span>
            ))}
          </div>
        </section>

        <section id="experience" className="experience">
          <h3>Experience</h3>
          <div className="exp-card">
            <h4>Marketing Booster</h4>
            <p className="exp-meta">Digital Marketing Executive • 1 year</p>
            <ul>
              <li>Enhanced brand visibility through social and content campaigns.</li>
              <li>Worked with cross-functional teams to improve user acquisition and retention.</li>
              <li>Gained analytical skills (GA, basic reporting) and content creation experience.</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-text">
            <h3>Let's build something together</h3>
            <p>Available for freelance and full-time roles. Quick replies on WhatsApp.</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="primary-btn">Message on WhatsApp</a>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Your name" aria-label="name" />
            <input placeholder="you@example.com" aria-label="email" />
            <textarea rows={4} placeholder="Brief message" aria-label="message" />
            <button type="button" onClick={() => window.open(whatsappLink, "_blank")} className="primary-btn">Send via WhatsApp</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Esha Laraib • MERN Developer</p>
      </footer>
    </div>
  );
}
