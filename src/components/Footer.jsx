import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footerContainer" style={{ fontFamily: 'Open Sans' }}>
        <div className="socialIcons">
          <a
            target="_blank"
            href="https://youtube.com/@UttarakhandAssociationofSG"
            rel="noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            target="_blank"
            href="https://twitter.com/UttarakhandSG"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            target="_blank"
            href="https://instagram.com/uasgvibes"
            rel="noreferrer"
          >
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
      <div className="footerBottom" style={{ fontFamily: 'Open Sans' }}>
        <p>
          Copyright &copy; {year}; Designed and Developed by{' '}
          <a
            target="_blank"
            href="https://raikwal-portfolio.vercel.app/"
            className="dev"
            rel="noreferrer"
          >
            Lakshya Raikwal
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
