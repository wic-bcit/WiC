import "../css/AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="Section" id="About">
      <h1 className="Title">About Us</h1>

      <div className="AboutUs">
        <p className="about-details">
                  Hello Everyone!
                  <br />
                  <br />
                  We are a student run club at BCIT. This club was started by a group of like-minded individuals who wanted to create a safe space for the female students in Computing programs at BCIT.
                  <br />
                  <br />
                  Our club's main goal is to Empower women in a male-dominated industry, Promote women in Computing, and Connect students with female professionals in the Vancouver Tech Industry.
                  <br />
                  <br />
                  We host events and collabrate with local companies to bring tips & tricks and networking opportunities to our club members.
                  Such as, Meet and Greets, Resume & Cover Letter Mini Panels and Game Nights.
                  <br />
                  <br />
                  We welcome all students that support our goals and want to create a safe space for like-minded people.
                  <br />
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
