import React from "react";
import "./Portfolio.css";

const items = [
  { id:1, title:"Modern Living Room", img:"/portfolio/1.jpg" },
  { id:2, title:"Kitchen Brightened", img:"/portfolio/2.jpg" },
  { id:3, title:"Virtual Staging", img:"/portfolio/3.jpg" },
  { id:4, title:"Exterior Sky Swap", img:"/portfolio/4.jpg" },
  { id:5, title:"Bedroom Retouch", img:"/portfolio/5.jpg" },
  { id:6, title:"Before/After Set", img:"/portfolio/6.jpg" },
];

export default function Portfolio(){
  return (
    <main className="container section">
      <h1>Portfolio</h1>
      <p className="muted">Selected before & afters from our real-estate edits.</p>

      <div className="portfolio-grid">
        {items.map(item => (
          <div className="card" key={item.id}>
            <div className="thumb" style={{backgroundImage:`url(${item.img})`}}/>
            <div className="meta">
              <h3>{item.title}</h3>
              <button>View</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
