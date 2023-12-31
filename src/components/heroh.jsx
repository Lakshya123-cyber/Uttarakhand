import "./Hero.css";

function Heroh(props) {
  return (
    <>
      <div className={props.cName}>
        <video src={props.heroVid} autoPlay loop muted playsInline />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <a href={props.url} target="_blank" className={props.btnClass}>
            {props.btnText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Heroh;
