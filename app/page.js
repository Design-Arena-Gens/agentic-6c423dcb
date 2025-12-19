'use client'

export default function Home() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">AGENCY</div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <h1>Transform Your Business</h1>
        <p>We deliver cutting-edge digital solutions that drive growth and innovation</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="icon">🎨</div>
            <h3>Design</h3>
            <p>Beautiful, user-centric designs that captivate and convert</p>
          </div>
          <div className="service-card">
            <div className="icon">💻</div>
            <h3>Development</h3>
            <p>Robust, scalable solutions built with modern technologies</p>
          </div>
          <div className="service-card">
            <div className="icon">📈</div>
            <h3>Marketing</h3>
            <p>Data-driven strategies to grow your brand and reach</p>
          </div>
          <div className="service-card">
            <div className="icon">🚀</div>
            <h3>Consulting</h3>
            <p>Expert guidance to accelerate your digital transformation</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>Why Choose Us</h2>
        <div className="features">
          <div className="feature">
            <h3>10+ Years Experience</h3>
            <p>Proven track record of delivering excellence</p>
          </div>
          <div className="feature">
            <h3>500+ Projects</h3>
            <p>Successfully completed for global clients</p>
          </div>
          <div className="feature">
            <h3>24/7 Support</h3>
            <p>Always here when you need us</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Let's Work Together</h2>
        <p>Ready to take your business to the next level?</p>
        <button className="cta-button">Contact Us</button>
      </section>

      <footer>
        <p>&copy; 2024 Agency. All rights reserved.</p>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          color: #333;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 5%;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 100;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #667eea;
        }

        .hero {
          text-align: center;
          padding: 10rem 5% 8rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          margin-top: 70px;
        }

        .hero h1 {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .hero p {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }

        .cta-button {
          background: white;
          color: #667eea;
          border: none;
          padding: 1rem 3rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .services {
          padding: 6rem 5%;
          background: #f8f9fa;
        }

        .services h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #333;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card {
          background: white;
          padding: 2.5rem;
          border-radius: 15px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }

        .icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .service-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #667eea;
        }

        .service-card p {
          color: #666;
          line-height: 1.6;
        }

        .about {
          padding: 6rem 5%;
          background: white;
        }

        .about h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }

        .feature h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: #667eea;
        }

        .feature p {
          color: #666;
        }

        .contact {
          padding: 6rem 5%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
        }

        .contact h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .contact p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        footer {
          background: #2d3748;
          color: white;
          text-align: center;
          padding: 2rem;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }

          .nav-links {
            gap: 1rem;
          }

          .service-grid,
          .features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
