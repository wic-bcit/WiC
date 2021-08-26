import "../../css/Event.css";
import Event from "./EventInfo";
import SimpleNavbar from "../Navbar/SimpleNavbar";
import Footer from "../Footer";

import React from "react";
import { Link } from "react-router-dom";

const PastEvents = () => {
  return (
    <div className="PastEvents">
      <SimpleNavbar />
      <h1 className="Title">Past Events</h1>
      <div className="event-container">
        <Event />
        <div className="btn-container">
          <Link className={"page-link"} to="/">
            ◂ Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PastEvents;
