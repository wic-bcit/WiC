import "../../css/Event.css";
import Event from "./EventInfo";
import SimpleNavbar from "../Navbar/SimpleNavbar";
import Footer from "../Footer";

import React from "react";

const PastEvents = () => {
  return (
    <div className="PastEvents">
      <SimpleNavbar />
      <h1 className="Title">Past Events</h1>
      <div className="event-container">
        <Event />
        <div className="btn-container">
          <a className="page-link" href="/WiC">
            ◂ Return Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PastEvents;
