import React from "react";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Event from "../components/Event";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroVid="/videos/videoo.mp4"
        title="Uttarakhand Association of Singapore"
        subtitle="Welcome to UASG!"
        btnText="About Us"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Event />
      <Footer />
    </>
  );
}

export default Home;
