import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import EventData from "../components/EventData";

function Members() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroVid="/videos/members.mp4"
        title="Our Members"
        subtitle="Nothing is possible without them"
        btnClass="hide"
      />
      <div className="event">
        <div className="eventcard">
          <EventData
            image="/images/logo.png"
            heading="Harish Pant"
            text="The President of Uttarakhand Association of Singapore"
          />
          <EventData
            image="/images/logo.png"
            heading="Atima Joshi"
            text="The Vice President of Uttarakhand Association of Singapore"
          />
          <EventData
            image="/images/logo.png"
            heading="Sunil Thapliyal"
            text="The Secretary of Uttarakhand Association of Singapore"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Members;
