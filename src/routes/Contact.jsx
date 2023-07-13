import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Hero
        cName="hero-mid"
        heroVid="/videos/contact.mp4"
        title="Contact Us"
        subtitle="Get in touch with us"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
