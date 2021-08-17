import React from "react";
import Event from "./EventInfo";
import { Link } from "react-router-dom";

import "../../css/Event.css";

class Events extends React.Component {
  render() {
    return (
      <div className="Section" id="Event">
        <h1 className="Title">Events</h1>
        <div className="Events">
          <Event preview={this.props.preview} />
          <div className="btn-container">
            <Link className={"page-link"} to="/past-events">
              View Past Events ▸
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
