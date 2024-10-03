import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <nav>
          <div className="logo">Marine & Petroleum Engineering</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Empowering the Future of Marine & Petroleum Engineering</h1>
        <p>Explore cutting-edge technologies and sustainable practices shaping the future of energy and maritime industries.</p>
        <a href="#services" className="cta-button">Learn More</a>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>We are pioneers in marine and petroleum engineering, focusing on innovative solutions to meet global energy demands while ensuring environmental sustainability.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Offshore Drilling</h3>
            <p>Advanced drilling techniques for safe and efficient extraction of marine-based resources.</p>
          </div>
          <div className="card">
            <h3>Marine Construction</h3>
            <p>Design and development of offshore structures and marine vessels for exploration and transportation.</p>
          </div>
          <div className="card">
            <h3>Renewable Energy</h3>
            <p>Harnessing ocean energy and integrating sustainable solutions into petroleum engineering.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Marine & Petroleum Engineering. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
