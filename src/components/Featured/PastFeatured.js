import React from "react";
import { Link } from "react-router-dom";

import SimpleNavbar from "../Navbar/SimpleNavbar";
import Footer from "../Footer";

const PastFeatured = () => {
  return (
    <div className="PastFeatured">
      <SimpleNavbar />
      <h1 className="Title">Past Featured Students</h1>
      <div className="feature-container">
        <div className="btn-container">
          <Link className={"page-link"} to="/">
            ◂ Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PastFeatured;
