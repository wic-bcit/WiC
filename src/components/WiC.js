import "../css/WiC.css";
import logo from "../img/logo/wic_logo_2021.png";

const WiC = () => {
  return (
    <div className="WiC">
      <div className="WiC-Content">
        <img src={logo} alt="wic logo"></img>
        <div className="Text">
          <h1 className="wic-title">Empower,</h1>
          <h1 className="wic-title">Promote, & </h1>
          <h1 className="wic-title">Connect</h1>
          <h1 className="wic-title y">Women in</h1>
          <h1 className="wic-title y">Computing</h1>
        </div>
      </div>
    </div>
  );
};

export default WiC;
