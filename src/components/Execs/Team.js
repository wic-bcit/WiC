import React from "react";
import "../../css/Team.css";
// import { ExecList } from "./ExecList";

class Team extends React.Component {
  render() {
    return (
      <div className="Section" id="Team">
        <h1 className="Title">Meet the Team</h1>
        <div className="team-container">
          <div className="team-details">
            {/* {ExecList.map((exec, index) => {
              return <div></div>;
            })} */}
          </div>
          <a className="page-link" href="/past-execs">
            View Past Executive Team ▸
          </a>
        </div>
      </div>
    );
  }
}

export default Team;
