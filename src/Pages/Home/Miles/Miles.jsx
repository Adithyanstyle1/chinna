import React from "react";
import "./Miles.css";
import { Trophy, Users, Clock, Briefcase } from "lucide-react";

const milestones = [
  {
    icon: <Briefcase size={38} />,
    number: "500+",
    label: "Projects Delivered",
  },
  {
    icon: <Users size={38} />,
    number: "300+",
    label: "Happy Clients",
  },
  {
    icon: <Clock size={38} />,
    number: "5+ Years",
    label: "Experience",
  },
  {
    icon: <Trophy size={38} />,
    number: "25+",
    label: "Industry Awards",
  },
];

export default function Miles() {
  return (
    <section className="miles-section">
      <div className="miles-container">
        <h2 className="miles-title">Our Milestones</h2>
        <p className="miles-sub">
          A journey of excellence built on trust, quality, and innovation.
        </p>

        <div className="miles-grid">
          {milestones.map((mile, index) => (
            <div className="mile-card" key={index}>
              <div className="mile-icon">{mile.icon}</div>
              <h3 className="mile-number">{mile.number}</h3>
              <p className="mile-label">{mile.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
