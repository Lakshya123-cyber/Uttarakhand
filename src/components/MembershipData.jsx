import "./Event.css";

function MembershipData(props) {
  return (
    <div className="e-card">
      <div className="e-image">
        <img alt="image" src={props.image} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <ul className="ul">
        <li>{props.list1}</li>
        <li>{props.list2}</li>
        <li>{props.list3}</li>
        <li>{props.list4}</li>
      </ul>
      <div className="member-text">
        <a target="_blank" href={props.url} className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
    </div>
  );
}

export default MembershipData;
