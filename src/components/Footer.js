import "../css/Footer.css";
import React from "react";

class Footer extends React.Component {
  openLink = () => {
    window.open("https://www.instagram.com/wic.bcit/", "_blank");
  };

  render() {
    return (
      <div className="Footer">
        <div className="social-container">
          <div className="info-container">
            <img
              className="info-instagram"
              alt="instagram-img"
              src={process.env.PUBLIC_URL + "/img/logo/instagram.png"}
              onClick={this.openLink}
            ></img>
            <h2>@wic.bcit</h2>
          </div>

          <div className="info-container">
            <a href="mailto:wicbcit@email.com">
              <img
                className="socials-email"
                alt="email-img"
                src={process.env.PUBLIC_URL + "/img/logo/email.png"}
              ></img>
            </a>
            <h2>wicbcit@gmail.com</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
