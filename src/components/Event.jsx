import './Event.css';
import EventData from './EventData';

function Event() {
  return (
    <div className="event">
      <h1>Our Events</h1>
      <p className="para">Check out our recent events</p>
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
          heading="Diwali 2019"
          text="Diwali, also known as Deepavali, is one of the most widely celebrated festivals in India and holds great cultural and religious significance. It is often referred to as the Festival of Lights. Diwali is celebrated with immense enthusiasm and joy by people of various faiths, not only in India but also around the world."
        />
      </div>
    </div>
  );
}

export default Event;
