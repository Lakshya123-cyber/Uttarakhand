import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import EventData from "../components/EventData";

function Events() {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Hero
        cName="hero-mid"
        heroVid="/videos/event.mp4"
        title="Events and Community Support"
        subtitle="We hold amazing events while helping others!"
        btnClass="hide"
      />
      <div className="event">
        <h1>Our Events and Community Supports</h1>
        <p>Check out our ongoing and recent events</p>
        <div className="eventcard">
          <div className="e-card">
            <div className="e-image">
              <img alt="image" src="/images/cover.png" />
            </div>
            <h4>Kauthig 2023</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero
              aliquid doloribus cum ab, iusto perferendis eligendi aliquam
              adipisci soluta. Saepe expedita laudantium enim quas natus? Qui
              corporis aliquid, dolore facilis animi dolor, nesciunt itaque et
              atque hic vitae unde!
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
            heading="Diwali 2022"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero aliquid doloribus cum ab, iusto perferendis eligendi aliquam adipisci soluta. Saepe expedita laudantium enim quas natus? Qui corporis aliquid, dolore facilis animi dolor, nesciunt itaque et atque hic vitae unde!"
          />
          <EventData
            image="/images/kauthig.jpg"
            heading="Kauthig 2019"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero aliquid doloribus cum ab, iusto perferendis eligendi aliquam adipisci soluta. Saepe expedita laudantium enim quas natus? Qui corporis aliquid, dolore facilis animi dolor, nesciunt itaque et atque hic vitae unde!"
          />
        </div>
        <div className="eventcard">
          <EventData
            image="/images/holi.png"
            heading="Holi 2019"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero aliquid doloribus cum ab, iusto perferendis eligendi aliquam adipisci soluta. Saepe expedita laudantium enim quas natus? Qui corporis aliquid, dolore facilis animi dolor, nesciunt itaque et atque hic vitae unde!"
          />
          <EventData
            image="/images/redd.jpg"
            heading="Red Cross Volunteering"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero aliquid doloribus cum ab, iusto perferendis eligendi aliquam adipisci soluta. Saepe expedita laudantium enim quas natus? Qui corporis aliquid, dolore facilis animi dolor, nesciunt itaque et atque hic vitae unde!"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Events;
