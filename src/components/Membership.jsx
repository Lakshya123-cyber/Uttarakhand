import React from "react";
import "./Hero.css";
import "./Event.css";

function Membership() {
  return (
    <div className="event">
      <h1>Our Membership</h1>
      <p>Check out our membership program</p>
      <div className="eventcard">
        <div className="e-card">
          <div className="e-image">
            <img alt="image" src="/images/kauthig.jpg" />
          </div>
          <h4>Annual Plan</h4>
          <p style={{ fontWeight: "bold", color: "#642420", fontSize: "23px" }}>
            Your Investment: SGD 120
          </p>
          <ul className="ul">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li style={{ textDecoration: "line-through" }}>Feature 3</li>
            <li style={{ textDecoration: "line-through" }}>Feature 4</li>
          </ul>
          <div className="member-text">
            <a
              target="_blank"
              href="https://forms.gle/hXm1oKvJkwxVcH7s9"
              className="show"
            >
              BUY NOW
            </a>
          </div>
        </div>
        <div className="e-card">
          <div className="e-image">
            <img alt="image" src="/images/kauthig.jpg" />
          </div>
          <h4>5 Year Plan</h4>
          <p style={{ fontWeight: "bold", color: "#642420", fontSize: "23px" }}>
            Your Investment: SGD 500
          </p>
          <ul className="ul">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li style={{ textDecoration: "line-through" }}>Feature 4</li>
          </ul>
          <div className="member-text">
            <a
              target="_blank"
              href="https://forms.gle/hXm1oKvJkwxVcH7s9"
              className="show"
            >
              BUY NOW
            </a>
          </div>
        </div>
        <div className="e-card">
          <div className="e-image">
            <img alt="image" src="/images/kauthig.jpg" />
          </div>
          <h4>Lifetime Plan</h4>
          <p style={{ fontWeight: "bold", color: "#642420", fontSize: "23px" }}>
            Your Investment: SGD 1000
          </p>
          <ul className="ul">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <div className="member-text">
            <a
              target="_blank"
              href="https://forms.gle/hXm1oKvJkwxVcH7s9"
              className="show"
            >
              BUY NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;
