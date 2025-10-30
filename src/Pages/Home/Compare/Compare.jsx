import React, { useState } from "react";
import "./Compare.css";

const Compare = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSlide = (e) => {
    setSliderPos(e.target.value);
  };

  return (
    <section className="compare-section">
      <h2 className="compare-title">Before & After Perfection</h2>
      <div className="compare-container">
        <div className="compare-wrapper">
          <div
            className="compare-before"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80"
              alt="Before Editing"
            />
          </div>
          <img
            className="compare-after"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="After Editing"
          />
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={handleSlide}
            className="compare-slider"
          />
        </div>
      </div>
    </section>
  );
};

export default Compare;
