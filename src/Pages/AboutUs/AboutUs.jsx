import React from "react";
import "./AboutUs.css";

export default function AboutUs(){
  return (
    <main className="container section about">
      <div className="about-grid">
        <div className="about-left">
          <h1>About Chinna Studio</h1>
          <p className="muted">We specialise in real-estate photo editing — helping listings look their best and sell faster.</p>
          <p>We combine careful retouching, fast turnaround, and packages that fit agents and photographers. Our processes keep image quality high while meeting marketplace size & aspect requirements.</p>

          <h3>Why choose us</h3>
          <ul>
            <li>Fast 24–48h turnaround for most orders</li>
            <li>Realistic virtual staging and object removal</li>
            <li>Optimized images for MLS & portals</li>
          </ul>
        </div>

        <div className="about-right">
          <div className="card">
            <img src="/team.jpg" alt="team"/>
          </div>
        </div>
      </div>
    </main>
  );
}
