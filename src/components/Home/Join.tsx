import "./Join.css";

function Join() {
  return (
    <div className="Section" id="Join">
      <h1 className="Title">Join Us</h1>
      <div className="join-container">
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/wicwebiste.appspot.com/o/logo%2Fdiscord-logo.png?alt=media&token=8d4b33be-5da7-4d6c-a39b-cbc46923c294"
          }
          alt="Discord Logo"
        ></img>
        <div className="join-info">
          <p>
            Join our Discord server and be notified of our upcoming events and
            socialize with other BCIT Computing Students.
          </p>
          <p>All BCIT students and Alumni are welcome to join!</p>
        </div>
      </div>
      <a
        className="btn"
        href="https://forms.gle/2BThjVx5EaqSfrD79"
        target="_blank"
        rel="noreferrer"
      >
        Register Here
      </a>
    </div>
  );
}

export default Join;
