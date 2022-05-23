import "./Footer.css";
import React from "react";

export default class Footer extends React.Component {
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
              src={
                "https://firebasestorage.googleapis.com/v0/b/wicwebiste.appspot.com/o/logo%2Finstagram.png?alt=media&token=c3d5083e-afff-42ce-8dbb-0d511b296352"
              }
              onClick={this.openLink}
            ></img>
            <h2>@wic.bcit</h2>
          </div>

          <div className="info-container">
            <a href="mailto:wicbcit@email.com">
              <img
                className="socials-email"
                alt="email-img"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/wicwebiste.appspot.com/o/logo%2Femail.png?alt=media&token=553635ee-9e26-4156-a572-fab739cf38e7"
                }
              ></img>
            </a>
            <h2>wicbcit@gmail.com</h2>
          </div>
        </div>
      </div>
    );
  }
}
