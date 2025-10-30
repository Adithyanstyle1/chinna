import React from "react";
import "./CX.css";

const items = [
  {
    id: 1,
    title: "24 / 7 Support",
    desc: "Round-the-clock assistance for urgent listings and questions.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden focusable="false">
        <path d="M12 1.5a10.5 10.5 0 1 0 10.5 10.5A10.513 10.513 0 0 0 12 1.5Zm1 7.5H11v5l4.2 2.52.8-1.28-3.8-2.24V9z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Fast Turnaround",
    desc: "Typical delivery in 24–48 hours for most edits.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden focusable="false">
        <path d="M12 2a10 10 0 1 0 7.07 17.07L18 17l-1.41 1.41 1.41 1.41A8 8 0 1 1 12 4V2zM11 6h2v7h-6v-2h4z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Quality Guarantee",
    desc: "Professional retouching standards — we don’t compromise.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden focusable="false">
        <path d="M12 1.5l3 6.5 7 1-5 4.8 1.2 7L12 18.9 5.8 21.3 7 14.3 2 9.5l7-1 3-6.5z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Easy Revisions",
    desc: "Request edits until you’re satisfied — revisions included.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden focusable="false">
        <path d="M12 6v6l4 2 .8-1.2L13 11.8V6h-1zM6 4h8v2H7v11h11v-7h2v9H5V4z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Secure Delivery",
    desc: "Files delivered over signed links; private storage options.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden focusable="false">
        <path d="M17 8V7a5 5 0 0 0-10 0v1H5v14h14V8h-2zM9 7a3 3 0 1 1 6 0v1H9V7z" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Dedicated Account",
    desc: "A single point of contact for faster coordination.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden focusable="false">
        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 9v-1a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v1z" />
      </svg>
    )
  }
];

export default function CX() {
  return (
    <section className="cx-section" aria-labelledby="cx-title">
      <div className="cx-container">
        <h2 id="cx-title" className="cx-title">Customer Experience</h2>
        <p className="cx-sub">We combine speed, craftsmanship and white-glove service for every photo.</p>

        <div className="cx-grid" role="list">
          {items.map((it) => (
            <article className="cx-item" key={it.id} role="listitem">
              <div className="cx-icon" aria-hidden>
                {it.icon}
              </div>
              <div className="cx-body">
                <h3 className="cx-item-title">{it.title}</h3>
                <p className="cx-item-desc">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
