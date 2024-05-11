import { useEffect } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import EventData from '../components/EventData';

function Events() {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
        <p>Check out our recent events</p>
        <div className="eventcard">
          <EventData
            image="/images/holi2024.jpg"
            heading="Holi 2024"
            text="Holi is a vibrant and joyous festival celebrated in India and by Hindu communities around the world. Also known as the Festival of Colors Holi marks the arrival of spring and the victory of good over evil. It is a time when people come together to celebrate with enthusiasm and merriment."
          />
          <EventData
            image="/images/kauthig2023.jpeg"
            heading="Kauthig 2023"
            text="Kauthig is a traditional folk dance and music festival celebrated
            in the state of Uttarakhand, India. It is a significant cultural
            event that showcases the vibrant heritage and traditions of the
            region."
          />
          <EventData
            image="/images/diwali.jpeg"
            heading="Diwali 2022"
            text="Diwali, also known as Deepavali, is one of the most widely celebrated festivals in India and holds great cultural and religious significance. It is often referred to as the Festival of Lights. Diwali is celebrated with immense enthusiasm and joy by people of various faiths, not only in India but also around the world."
          />
        </div>
        <div className="eventcard">
          <EventData
            image="/images/kauthig.jpg"
            heading="Kauthig 2019"
            text="Kauthig is a traditional folk dance and music festival celebrated in
            the state of Uttarakhand, India. It is a significant cultural event
            that showcases the vibrant heritage and traditions of the region."
          />
          <EventData
            image="/images/holi.jpg"
            heading="Holi 2019"
            text="Holi is a vibrant and joyous festival celebrated in India and by Hindu communities around the world. Also known as the Festival of Colors Holi marks the arrival of spring and the victory of good over evil. It is a time when people come together to celebrate with enthusiasm and merriment."
          />
          <EventData
            image="/images/redd.jpg"
            heading="Red Cross Volunteering"
            text="Volunteering with the Red Cross is a rewarding and impactful experience that allows individuals to make a positive difference in the lives of people facing emergencies, disasters, and crises. The Red Cross is a humanitarian organization known worldwide for its commitment to providing assistance, support, and relief to those in need."
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Events;
