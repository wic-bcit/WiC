import React from "react";
import { Link } from "react-scroll";
import { MenuItems } from "./MenuItems";
import "../../css/Navbar.css";

class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  goHome = () => {
    window.open("/WiC", "_self");
  };

  render() {
    return (
      <nav className="Navbar">
        <div className="navbar-logo">
          <img
            src={process.env.PUBLIC_URL + "/img/logo/wic_logo_2021.png"}
            alt="wic-logo"
            onClick={this.goHome}
          ></img>
          <h1 onClick={this.goHome}>Women in Computing</h1>
        </div>

        <div className="Menu">
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={item.cName}
                    to={item.id}
                    smooth={true}
                    offset={item.offset}
                    duration={1000}
                    onClick={this.handleClick}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
