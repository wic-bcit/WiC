import React from "react";
import { Link } from "react-router-dom";
import EventTemplate from "./EventTemplate";
import "./Events.css";

export default function Events(props: any) {
  return (
    <div className="Section">
      <h1 className="Title">Events</h1>
      <div className="Events" id="Event">
        <div className="event-container">
          <EventTemplate preview={props.preview} />
          <div className="btn-container">
            <Link className={"page-link"} to="/event-archive">
              View Past Events ▸
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
