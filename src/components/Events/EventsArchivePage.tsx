import React from "react";
import { Link } from "react-router-dom";

import EventCards from "./EventTemplate";
import SimpleNavbar from "../Reuse/Navbar/SimpleNavbar";
import Footer from "../Reuse/Footer/Footer";

import "./Events.css";

const EventsArchivePage = () => {
  return (
    <div className="EventsArchivePage">
      <SimpleNavbar />
      <h1 className="Title">Past Events</h1>
      <div className="event-container">
        <EventCards />
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

export default EventsArchivePage;
