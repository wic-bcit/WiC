import React from "react";
import EventCards from "./EventCards";
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
          <a className="page-link" href="/">
            ◂ Return Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsArchivePage;
