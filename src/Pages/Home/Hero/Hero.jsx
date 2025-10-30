import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Transform Real Estate Photos Into Perfection</h1>
        <p>
          We turn ordinary property photos into visually stunning images that
          sell faster and attract premium clients.
        </p>
        <button className="hero-btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80"
          alt="Luxury real estate exterior"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
