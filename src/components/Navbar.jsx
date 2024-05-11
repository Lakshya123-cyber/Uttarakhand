import { Component } from 'react';
import './NavbarStyle.css';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className="NavbarItems">
          <a href="/">
            <img src="/images/logo.png" className="navbar-logo" />
          </a>

          <div className="menu-icons" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
            ></i>
          </div>

          {open && (
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
              {MenuItems.map((item, i) => (
                <li key={i} onClick={this.state.clicked}>
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </>
    );
  }
}

export default Navbar;
