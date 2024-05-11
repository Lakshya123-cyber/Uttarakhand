import './ContactForm.css';
import { useForm, ValidationError } from '@formspree/react';
import Home from './../routes/Home';

function ContactForm() {
  const [state, handleSubmit] = useForm('mwkgzlve');
  if (state.succeeded) {
    return <Home />;
  }

  return (
    <div className="form-container" style={{ fontFamily: 'Open Sans' }}>
      <h1 style={{ fontFamily: 'Rosemate Sans' }}>Send a message to us!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="labelStyle">
          Name
        </label>
        <input id="name" type="text" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label htmlFor="email" className="labelStyle">
          Email Address
        </label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="subject" className="labelStyle">
          Subject
        </label>
        <input id="subject" type="text" name="subject" />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
        <label htmlFor="message" className="labelStyle">
          Message
        </label>
        <textarea id="message" name="message" rows="4"></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Send Message
        </button>
      </form>
      <br />
      <br />
      <br />
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7400420935414!2d103.89471720000002!3d1.3320983000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17f3a6818de1%3A0x124eeb26add7fd03!2sUbi%20Ave%203!5e0!3m2!1sen!2ssg!4v1689234705929!5m2!1sen!2ssg"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default ContactForm;
