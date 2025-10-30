import React from "react";
import "./Cycle.css";

const steps = [
  {
    id: 1,
    title: "1. Upload Photos",
    desc: "Clients upload property images securely through our portal.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M5 20h14a2 2 0 0 0 2-2v-7h-2v7H5V6h7V4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2zM15 4v2h3.59L10.83 13.76l1.41 1.41L20 7.41V11h2V4h-7z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "2. Editing & Retouching",
    desc: "Our team enhances lighting, color, and sky — making every photo look flawless.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34a1.25 1.25 0 0 0 0-1.77l-2.34-2.34a1.25 1.25 0 0 0-1.77 0l-1.83 1.83 4.11 4.11 1.83-1.83z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "3. Quality Check",
    desc: "Each photo passes through a detailed review before delivery.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l5.59-5.59L18 10z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "4. Delivery",
    desc: "Receive edited images via private, secure download links — ready to post.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20 8l-8 8-8-8h16z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "5. Revisions",
    desc: "If needed, request revisions — we ensure satisfaction before project closure.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 6V3L8 7l4 4V8c2.21 0 4 1.79 4 4 0 1.39-.72 2.61-1.8 3.33l1.46 1.46C17.14 15.74 18 13.96 18 12a6 6 0 0 0-6-6zm0 12a6 6 0 0 0 6-6h-2a4 4 0 0 1-4 4v3l4-4-4-4v3a4 4 0 0 1-4-4H6a6 6 0 0 0 6 6z" />
      </svg>
    ),
  },
];

export default function Cycle() {
  return (
    <section className="cycle-section">
      <div className="cycle-container">
        <h2 className="cycle-title">Our Working Cycle</h2>
        <p className="cycle-sub">
          A seamless 5-step process designed for speed, quality, and client
          satisfaction.
        </p>

        <div className="cycle-grid">
          {steps.map((step) => (
            <div className="cycle-card" key={step.id}>
              <div className="cycle-icon">{step.icon}</div>
              <h3 className="cycle-step-title">{step.title}</h3>
              <p className="cycle-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
