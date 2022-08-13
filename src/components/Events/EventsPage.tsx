import React from "react";
import { Link } from "react-router-dom";
import EventTemplate from "./EventTemplate";
import SimpleNavbar from "../Reuse/Navbar/SimpleNavbar";
import Footer from "../Reuse/Footer/Footer";
import { home_route } from "../../Routes";
import "./Events.css";

export default function EventsPage() {
  return (
    <div className="EventsPage">
      <SimpleNavbar />
      <h1 className="Title">Past Events</h1>
      <div className="event-container">
        <EventTemplate preview={0} />
        <div className="btn-container">
          <Link className={"page-link"} to={"/"}>
            ◂ Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// export default EventsPage;
