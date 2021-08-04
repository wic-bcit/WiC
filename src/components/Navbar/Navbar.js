import React from "react";
import { MenuItems } from "./MenuItems";
import "../../css/Navbar.css";
import logo from "../../img/logo/wic_logo_2021.png";

class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
    console.log(this.state.clicked);
  };

  render() {
    return (
      <nav className="NavbarItems">
        {/* Navbar Logo and Name */}
        <div className="navbar-logo">
          <img src={logo} alt="wic-logo"></img>
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
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
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
