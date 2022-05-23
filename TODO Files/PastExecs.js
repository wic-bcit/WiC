import React from "react";
import { Link } from "react-router-dom";
import {
  Fall2021,
  Winter2021,
  Winter2020,
  Fall2019,
  Winter2019,
  Fall2018,
  Winter2018,
} from "./ExecList";
import ExecInfo from "./ExecInfo";
import SimpleNavbar from "../Navbar/SimpleNavbar";
import Footer from "../Footer";
import "../../css/Execs.css";

class PastExecs extends React.Component {
  render() {
    return (
      <div className="PastEvents">
        <SimpleNavbar />
        <h1 className="Title">Current Executive Team</h1>
        <div className="exec-container">
          <div className="exec-info-container">
            {/* Fall 2021-------------------------------------- */}

            <div className="exec-info-Fall2021">
              <h2 className="semester-title">Fall 2021</h2>
              {Fall2021.map((exec, index) => {
                return (
                  <ExecInfo
                    key={index}
                    img={exec.img}
                    name={exec.name}
                    program={exec.program}
                    role={exec.role}
                  />
                );
              })}
            </div>

            {/* Fall 2020 - Winter 2021-------------------------------------- */}
            <h1 className="Title">Past Executive Team</h1>

            <div className="exec-info-Fall2020">
              <h2 className="semester-title">Fall 2020 - Winter 2021</h2>
              {Winter2021.map((exec, index) => {
                return (
                  <ExecInfo
                    key={index}
                    img={exec.img}
                    name={exec.name}
                    program={exec.program}
                    role={exec.role}
                  />
                );
              })}
            </div>

            {/* Winter 2020 -------------------------------------- */}

            <div className="exec-info-Winter2020">
              <h2 className="semester-title next">Winter 2020</h2>
              {Winter2020.map((exec, index) => {
                return (
                  <ExecInfo
                    key={index}
                    img={exec.img}
                    name={exec.name}
                    program={exec.program}
                    role={exec.role}
                  />
                );
              })}
            </div>

            {/* Fall 2019 -------------------------------------- */}

            <div className="exec-info-Winter2021">
              <h2 className="semester-title next">Fall 2019</h2>
              {Fall2019.map((exec, index) => {
                return (
                  <ExecInfo
                    key={index}
                    img={exec.img}
                    name={exec.name}
                    program={exec.program}
                    role={exec.role}
                  />
                );
              })}
            </div>

            {/* Winter 2019 -------------------------------------- */}
            <div className="exec-info-Winter2019">
              <h2 className="semester-title next">Winter 2019</h2>
              {Winter2019.map((exec, index) => {
                return (
                  <ExecInfo
                    key={index}
                    img={exec.img}
                    name={exec.name}
                    program={exec.program}
                    role={exec.role}
                  />
                );
              })}
            </div>

            {/* Fall 2018 -------------------------------------- */}
            <div className="exec-info-Winter2019">
              <h2 className="semester-title next">Fall 2018</h2>
              {Fall2018.map((exec, index) => {
                return (
                  <ExecInfo
                    key={index}
                    img={exec.img}
                    name={exec.name}
                    program={exec.program}
                    role={exec.role}
                  />
                );
              })}
            </div>

            {/* -------------------------------------- */}
            <div className="exec-info-Winter2019">
              <h2 className="semester-title next">Winter 2018</h2>
              {Winter2018.map((exec, index) => {
                return (
                  <ExecInfo
                    key={index}
                    img={exec.img}
                    name={exec.name}
                    program={exec.program}
                    role={exec.role}
                  />
                );
              })}
            </div>

            {/* -------------------------------------- */}
          </div>

          <div className="btn-container">
            <Link className={"page-link"} to="/">
              ◂ Return Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PastExecs;
