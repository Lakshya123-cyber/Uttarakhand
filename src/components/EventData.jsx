/* eslint-disable react/prop-types */
import './Event.css';

function EventData(props) {
  return (
    <div className="e-card">
      <div className="e-image">
        <img alt="image" src={props.image} />
      </div>
      <a href="/gallery" style={{ textDecoration: 'none', color: '#652420' }}>
        <h4>{props.heading}</h4>
      </a>
      <p>{props.text}</p>
    </div>
  );
}

export default EventData;
