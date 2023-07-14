import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Event from "../components/Event";
import Footer from "../components/Footer";
import Membership from "../components/Membership";

function Home() {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Hero
        cName="hero"
        heroVid="/videos/videoo.mp4"
        title="Uttarakhand Association of Singapore"
        subtitle="Welcome to UASG!"
        btnText="About Us"
        url="/about"
        btnClass="show"
      />
      <Event />
      <img
        src="/images/banner.png"
        style={{
          width: "100%",
          height: "100%",
          marginTop: "-10px",
          marginBottom: "-4px",
        }}
      />
      <Destination />
      <img
        src="/images/banner.png"
        style={{
          width: "100%",
          height: "100%",
          marginTop: "-10px",
          marginBottom: "-4px",
        }}
      />
      <Membership />
      <img
        src="/images/banner.png"
        style={{
          width: "100%",
          height: "100%",
          marginTop: "-8px",
          marginBottom: "-10px",
        }}
      />
      <Footer />
    </>
  );
}

export default Home;
