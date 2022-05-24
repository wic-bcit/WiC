import React from "react";
import "./Navbar.css";

class SimpleNavbar extends React.Component {
  goHome = () => {
    window.open("/WiC", "_self");
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

        <div className="home-link">
          <a className="nav-links simple" href="/WiC">
            Home
          </a>
        </div>
      </nav>
    );
  }
}

export default SimpleNavbar;
