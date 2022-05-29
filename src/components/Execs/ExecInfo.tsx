import React from "react";
import "./Exec.css";
import { Exec } from "./Exec";

function PastExecs(props: any) {
  let exec: Exec = props;
  return (
    <div className="exec-info">
      <img className="exec-img" src={exec.img} alt={exec.name} />
      <div className="exec-details">
        <div className="exec-name">{exec.name}</div>
        <div className="exec-program">{exec.program}</div>
        <div className="exec-role">{exec.role}</div>
      </div>
    </div>
  );
}

export default PastExecs;
