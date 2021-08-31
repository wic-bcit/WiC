import "../css/AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="Section" id="About">
      <h1 className="Title">About Us</h1>

      <div className="AboutUs">
        <p className="about-details">
                  Hello Everyone!<br />
                  We are a student run club at BCIT. <br />
                  Our club's main goal is to<br />
                  <ul>
                      <li>Empower women in a male-dominated industry</li>
                      <li>Promote women in Computing</li>
                      <li>Connect students with female professionals in the Vancouver Tech Industry</li>
                  </ul>
                  <br />
                  We host events and collabrate with local companies to bring tips & tricks and networking opportunities to our club members.
                  Such as, Meet and Greets, Resume & Cover Letter Mini Panels and Game Nights.
                  <br />
                  We welcome all students that support our goals and want to create a safe space for like-minded people.
                  <br />
                  Please email us if you have any inquires. Thank you!
        </p>
        <Link className={"page-link"} to="/past-execs">
          Executive Team ▸
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
