import "../css/WiC.css";
import logo from "../img/logo/wic_logo_2021.png";

const WiC = () => {
  return (
    <div className="WiC">
      <div className="Content">
        <img src={logo} alt="wic logo"></img>
        <div className="Text">
          <h1 className="WiCTitle">Empower,</h1>
          <h1 className="WiCTitle">Promote, & </h1>
          <h1 className="WiCTitle">Connect</h1>
          <h1 className="WiCTitle Y">Women in</h1>
          <h1 className="WiCTitle Y">Computing</h1>
        </div>
      </div>
    </div>
  );
};

export default WiC;
