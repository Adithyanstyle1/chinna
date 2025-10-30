import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    q: "How long does it take to deliver edited photos?",
    a: "Most projects are completed within 24–48 hours, depending on the number of images and complexity.",
  },
  {
    q: "Do you offer revisions if I’m not satisfied?",
    a: "Yes, we provide free revisions until you're completely satisfied with the results.",
  },
  {
    q: "What types of real estate photos can you edit?",
    a: "We handle interior, exterior, aerial, twilight, HDR blending, and virtually staged property photos.",
  },
  {
    q: "Is my uploaded data secure?",
    a: "Absolutely. All files are transferred via encrypted channels and stored securely on private servers.",
  },
  {
    q: "Do you offer bulk or subscription plans?",
    a: "Yes, we provide discounted rates for bulk editing and monthly partnership plans.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-sub">
          Here are some of the most common questions our clients ask.
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{item.q}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
