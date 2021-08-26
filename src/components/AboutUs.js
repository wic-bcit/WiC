import "../css/AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="Section" id="About">
      <h1 className="Title">About Us</h1>

      <div className="AboutUs">
        <p className="about-details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <Link className={"page-link"} to="/past-execs">
          Executive Team ▸
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
