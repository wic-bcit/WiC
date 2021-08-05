import React from "react";
import { Link } from "react-scroll";
import { MenuItems } from "./MenuItems";
import "../../css/Navbar.css";

class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
    console.log(this.state.clicked);
  };

  render() {
    return (
      <nav className="Navbar">
        {/* Navbar Logo and Name */}
        <div className="navbar-logo">
          <img
            src={process.env.PUBLIC_URL + "/img/logo/wic_logo_2021.png"}
            alt="wic-logo"
          ></img>
          <h1>Women in Computing</h1>
        </div>

        {/* Menu Icon */}
        <div className="Menu">
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          {/* Menu Items */}
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={item.cName}
                    to={item.id}
                    smooth={true}
                    offset={-50}
                    duration={1000}
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
