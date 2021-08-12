import React from "react";
import Event from "./EventInfo";
import { Link } from "react-router-dom";

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
              {/* <a className="page-link" href="/past-events">
                View Past Events ▸
              </a> */}

              <Link className={"page-link"} to="/past-events">
                View Past Events ▸
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
