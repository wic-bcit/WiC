import React from "react";
import EventCards from "./EventCards";

import "./Events.css";

export default function Events(props: any) {
  return (
    <div className="Section">
      <h1 className="Title">Events</h1>
      <div className="Events" id="Event">
        <div className="event-container">
          <EventCards preview={props.preview} />
          <div className="btn-container">
            <a className="page-link" href="/event-archive">
              View Past Events ▸
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
