import "./Member.css";

function MemberData(props) {
  return (
    <div className="m-card">
      <div className="m-image">
        <img alt="image" src={props.image} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default MemberData;
