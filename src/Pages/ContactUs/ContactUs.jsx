import React, { useState } from "react";
import "./ContactUs.css";

export default function ContactUs(){
  const [form, setForm] = useState({name:"", email:"", message:"", service:"Basic Retouch" });
  const [ok, setOk] = useState(null);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    // For now we just show a success toast — integrate your backend later
    console.log("submit", form);
    setOk(true);
    setForm({name:"", email:"", message:"", service:"Basic Retouch"});
    setTimeout(()=>setOk(null),3000);
  }

  return (
    <main className="container section">
      <h1>Contact Us</h1>
      <p className="muted">Tell us about your project — we'll reply in 24 hours (usually faster).</p>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={submit}>
          <label>Name
            <input name="name" value={form.name} onChange={handle} required/>
          </label>

          <label>Email
            <input name="email" type="email" value={form.email} onChange={handle} required/>
          </label>

          <label>Service
            <select name="service" value={form.service} onChange={handle}>
              <option>Basic Retouch</option>
              <option>Advanced Edits</option>
              <option>Virtual Staging</option>
            </select>
          </label>

          <label>Message
            <textarea name="message" rows="5" value={form.message} onChange={handle} />
          </label>

          <div style={{marginTop:12}}>
            <button type="submit">Send Message</button>
            {ok && <span className="sent"> Sent ✓</span>}
          </div>
        </form>

        <aside className="contact-info">
          <div className="card small">
            <h3>Our Office</h3>
            <p className="muted">Madurai, India</p>
          </div>
          <div className="card small">
            <h3>Email</h3>
            <p className="muted">hello@chinnastudio.com</p>
          </div>
          <div className="card small">
            <h3>Turnaround</h3>
            <p className="muted">Most orders in 24–48 hours</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
