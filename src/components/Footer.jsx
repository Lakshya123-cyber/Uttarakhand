import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="socialIcons">
          <a
            target="_blank"
            href="https://youtube.com/@UttarakhandAssociationofSG"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a target="_blank" href="https://twitter.com/UttarakhandSG">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a target="_blank" href="https://instagram.com/uasgvibes">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="footerNav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/event">Events</a>
            </li>
            <li>
              <a href="/Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          Copyright &copy;2023; Designed and Developed by{" "}
          <a
            target="_blank"
            href="https://raikwal-homepage.vercel.app/"
            className="dev"
          >
            Lakshya Raikwal
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
