import "../css/Join.css";

function Join() {
  return (
    <div className="Section" id="Join">
      <h1 className="Title">Join Us</h1>
      <div className="join-container">
        <img
          src={process.env.PUBLIC_URL + "/img/logo/Discord-Logo-Color.svg"}
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
