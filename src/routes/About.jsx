import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroVid="/videos/about.mp4"
        title="About Us"
        subtitle="Get to know us more!"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
