import React from "react";
import Event from "./Event";

import "../../css/Event.css";

class Events extends React.Component {
  render() {
    return (
      <div className="Section">
        <h1 className="Title">Events</h1>
        <div className="Events" id="Event">
          <div className="event-container">
            <Event preview={this.props.preview} />
            <div className="btn-container">
              <a className="btn main" href="/past-events">
                Past Events
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
