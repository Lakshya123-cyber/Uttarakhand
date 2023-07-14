import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="form-container" style={{ fontFamily: "Open Sans" }}>
      <h1 style={{ fontFamily: "Rosemate Sans" }}>Send a message to us!</h1>
      <form action="">
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
      <br />
      <br />
      <br />
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7400420935414!2d103.89471720000002!3d1.3320983000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17f3a6818de1%3A0x124eeb26add7fd03!2sUbi%20Ave%203!5e0!3m2!1sen!2ssg!4v1689234705929!5m2!1sen!2ssg"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default ContactForm;
