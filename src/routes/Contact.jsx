import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
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
