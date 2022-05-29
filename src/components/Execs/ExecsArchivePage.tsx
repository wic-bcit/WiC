import React from "react";
import { Link } from "react-router-dom";
import SimpleNavbar from "../Reuse/Navbar/SimpleNavbar";
import Footer from "../Reuse/Footer/Footer";
import "./Exec.css";

export default class ExecsArchivePage extends React.Component {
  render() {
    return (
      <div className="ExecsArchivePage">
        <SimpleNavbar />
        <h1 className="Title">Current Executive Team</h1>
        <div className="exec-container">
          <div className="exec-info-container">
            <div className="btn-container">
              <Link className={"page-link"} to="/">
                ◂ Return Home
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
