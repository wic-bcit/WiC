import "../../css/Event.css";
import Event from "./EventInfo";
import SimpleNavbar from "../Navbar/SimpleNavbar";

import React from "react";

const PastEvents = () => {
  return (
    <div className="PastEvents">
      <SimpleNavbar />
      <h1 className="Title">Past Events</h1>
      <div className="event-container">
        <Event />
      </div>
    </div>
  );
};

export default PastEvents;
