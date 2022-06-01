import React from "react";
import { Link } from "react-scroll";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { home_route } from "../../../Routes";

class Navbar extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  goHome = () => {
    window.open(home_route, "_self");
  };

  render() {
    return (
      <nav className="Navbar">
        <div className="navbar-logo">
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/wicwebiste.appspot.com/o/logo%2Fwic_logo_2021.png?alt=media&token=01e589d7-6d78-45cc-98f2-010caec5ec60"
            }
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
