import React from "react";
import "../../css/Navbar.css";

class SimpleNavbar extends React.Component {
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
