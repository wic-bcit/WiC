import "./WiC.css";

const WiC = () => {
  return (
    <div className="WiC" id="WiC">
      <div className="WiC-Content">
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/wicwebiste.appspot.com/o/logo%2Fwic_logo_2021.png?alt=media&token=01e589d7-6d78-45cc-98f2-010caec5ec60"
          }
          alt="wic logo"
        ></img>
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
