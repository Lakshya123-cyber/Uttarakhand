import "./Event.css";

import React from "react";
import EventData from "./EventData";

function Event() {
  return (
    <div className="event">
      <h1>Our Events</h1>
      <p className="para">Check out our ongoing and recent events</p>
      <div className="eventcard">
        <div className="e-card">
          <div className="e-image">
            <img alt="image" src="/images/cover.png" />
          </div>
          <h4>Kauthig 2023</h4>
          <p>
            Kauthig is a traditional folk dance and music festival celebrated in
            the state of Uttarakhand, India. It is a significant cultural event
            that showcases the vibrant heritage and traditions of the region.
          </p>
          <br />
          <br />
          <a href="/kauthig.pdf" target="_blank" rel="noopener noreferrer">
            <button style={{ color: "white", backgroundColor: "#652420" }}>
              Read More
            </button>
          </a>
        </div>
        <EventData
          image="/images/diwali.jpeg"
          heading="Diwali 2019"
          text="Diwali, also known as Deepavali, is one of the most widely celebrated festivals in India and holds great cultural and religious significance. It is often referred to as the Festival of Lights. Diwali is celebrated with immense enthusiasm and joy by people of various faiths, not only in India but also around the world."
        />
        <EventData
          image="/images/holi.jpg"
          heading="Holi 2019"
          text="Holi is a vibrant and joyous festival celebrated in India and by Hindu communities around the world. Also known as the Festival of Colors Holi marks the arrival of spring and the victory of good over evil. It is a time when people come together to celebrate with enthusiasm and merriment."
        />
      </div>
    </div>
  );
}

export default Event;
