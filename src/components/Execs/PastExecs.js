import React from "react";
import SimpleNavbar from "../Navbar/SimpleNavbar";
import Footer from "../Footer";

const PastExecs = () => {
  return (
    <div className="PastEvents">
      <SimpleNavbar />
      <h1 className="Title">Past Execs</h1>
      <div className="event-container">
        <div className="btn-container">
          <a className="page-link" href="/">
            ◂ Return Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PastExecs;
