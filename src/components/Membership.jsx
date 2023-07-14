import React from "react";
import "./Hero.css";
import "./Event.css";

function Membership() {
  return (
    <div className="event">
      <h1>Our Membership</h1>
      <p>
        Join UASG to network with Uttarakhandis in Singapore, fulfill social
        responsibilities, participate in events, support charitable programs in
        Uttarakhand, and be part of a motivated team.
      </p>
      <div className="eventcard">
        <div className="e-card">
          <div className="e-image">
            <img alt="image" src="/images/valley.jpg" />
          </div>
          <h4>Annual Plan</h4>
          <p style={{ fontWeight: "bold", color: "#642420", fontSize: "20px" }}>
            Your Investment: SGD 120
          </p>
          <br />
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
            <img alt="image" src="/images/jim.jpg" />
          </div>
          <h4>5 Year Plan</h4>
          <p style={{ fontWeight: "bold", color: "#642420", fontSize: "20px" }}>
            Your Investment: SGD 500
          </p>
          <br />
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
            <img alt="image" src="/images/dev.jpg" />
          </div>
          <h4>Lifetime Plan</h4>
          <p style={{ fontWeight: "bold", color: "#642420", fontSize: "20px" }}>
            Your Investment: SGD 1000
          </p>
          <br />
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
