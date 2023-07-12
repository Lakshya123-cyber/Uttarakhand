import "./Event.css";

import React from "react";
import EventData from "./EventData";

function Event() {
  return (
    <div className="event">
      <h1>Our Events</h1>
      <p>Check out our ongoing and recent events</p>
      <div className="eventcard">
        <EventData
          image="/images/kauthig.jpg"
          heading="Kauthig 2023"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero aliquid doloribus cum ab, iusto perferendis eligendi aliquam adipisci soluta. Saepe expedita laudantium enim quas natus? Qui corporis aliquid, dolore facilis animi dolor, nesciunt itaque et atque hic vitae unde!"
        />
        <EventData
          image="/images/kauthig.jpg"
          heading="Diwali 2019"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero aliquid doloribus cum ab, iusto perferendis eligendi aliquam adipisci soluta. Saepe expedita laudantium enim quas natus? Qui corporis aliquid, dolore facilis animi dolor, nesciunt itaque et atque hic vitae unde!"
        />
        <EventData
          image="/images/kauthig.jpg"
          heading="Kauthig 2019"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero aliquid doloribus cum ab, iusto perferendis eligendi aliquam adipisci soluta. Saepe expedita laudantium enim quas natus? Qui corporis aliquid, dolore facilis animi dolor, nesciunt itaque et atque hic vitae unde!"
        />
      </div>
    </div>
  );
}

export default Event;
