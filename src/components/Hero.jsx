/* eslint-disable react/prop-types */
import './Hero.css';

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <video src={props.heroVid} autoPlay loop muted playsInline />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
          <a href={props.url} className={props.btnClass}>
            {props.btnText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
