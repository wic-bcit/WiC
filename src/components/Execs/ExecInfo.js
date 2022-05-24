import React from "react";
import "../../css/Execs.css";

class PastExecs extends React.Component {
  render() {
    return (
      <div className="exec-info" key={this.props.index}>
        <img
          className="exec-img"
          src={process.env.PUBLIC_URL + this.props.img}
          alt={this.props.name}
        />
        <div className="exec-details">
          <div className="exec-name">{this.props.name}</div>
          <div className="exec-program">{this.props.program}</div>
          <div className="exec-role">{this.props.role}</div>
        </div>
      </div>
    );
  }
}

export default PastExecs;
