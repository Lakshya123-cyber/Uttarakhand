import './Event.css';
import EventData from './EventData';

function Event() {
  return (
    <div className="event">
      <h1>Our Events</h1>
      <p className="para">Check out our recent events</p>
      <div className="eventcard">
        <EventData
          image="/images/newyear.jpg"
          heading="Indian New Year"
          text="Indian New Year, also known as Puthandu, Vishu, Baisakhi, or Ugadi, is celebrated by various communities across India to mark the beginning of the new year. It is a time of joy, renewal, and hope, with people coming together to celebrate with family, friends, and loved ones."
        />
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
      </div>
    </div>
  );
}

export default Event;
