import "../css/Header.css";
import logo from "../img/logo/wic_logo_2021.png";

const Header = () => {
  return (
    <header className="Header">
      <div className="HeaderContainer">
        <div className="header-logo">
          <img src={logo} alt="wic-logo"></img>
          <h1>Women in Computing</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
