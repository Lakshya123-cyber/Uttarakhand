import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import EventData from "../components/EventData";

function Events() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroVid="src/assets/videos/event.mp4"
        title="Events and Community Support"
        subtitle="We hold amazing events while helping others!"
        btnClass="hide"
      />
      <div className="event">
        <h1>Our Events and Community Supports</h1>
        <p>Check out our ongoing and recent events</p>
        <div className="eventcard">
          <EventData
            image="src/assets/images/kauthig.jpg"
            heading="Kauthig 2023"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero aliquid doloribus cum ab, iusto perferendis eligendi aliquam adipisci soluta. Saepe expedita laudantium enim quas natus? Qui corporis aliquid, dolore facilis animi dolor, nesciunt itaque et atque hic vitae unde!"
          />
          <EventData
            image="src/assets/images/kauthig.jpg"
            heading="Diwali 2019"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero aliquid doloribus cum ab, iusto perferendis eligendi aliquam adipisci soluta. Saepe expedita laudantium enim quas natus? Qui corporis aliquid, dolore facilis animi dolor, nesciunt itaque et atque hic vitae unde!"
          />
          <EventData
            image="src/assets/images/kauthig.jpg"
            heading="Kauthig 2019"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero aliquid doloribus cum ab, iusto perferendis eligendi aliquam adipisci soluta. Saepe expedita laudantium enim quas natus? Qui corporis aliquid, dolore facilis animi dolor, nesciunt itaque et atque hic vitae unde!"
          />
        </div>
        <div className="eventcard">
          <EventData
            image="src/assets/images/kauthig.jpg"
            heading="Kauthig 2019"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero aliquid doloribus cum ab, iusto perferendis eligendi aliquam adipisci soluta. Saepe expedita laudantium enim quas natus? Qui corporis aliquid, dolore facilis animi dolor, nesciunt itaque et atque hic vitae unde!"
          />
          <EventData
            image="src/assets/images/kauthig.jpg"
            heading="Kauthig 2019"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero aliquid doloribus cum ab, iusto perferendis eligendi aliquam adipisci soluta. Saepe expedita laudantium enim quas natus? Qui corporis aliquid, dolore facilis animi dolor, nesciunt itaque et atque hic vitae unde!"
          />
          <EventData
            image="src/assets/images/kauthig.jpg"
            heading="Kauthig 2019"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero aliquid doloribus cum ab, iusto perferendis eligendi aliquam adipisci soluta. Saepe expedita laudantium enim quas natus? Qui corporis aliquid, dolore facilis animi dolor, nesciunt itaque et atque hic vitae unde!"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Events;
