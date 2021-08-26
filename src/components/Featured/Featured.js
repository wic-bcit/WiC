import React from "react";
import { Link } from "react-router-dom";

import "../../css/Featured.css";

const Featured = () => {
  return (
    <div className="Section" id="Featured">
      <h1 className="Title featured">Featured Students</h1>

      <Link className={"page-link"} to="/featured-students">
        View Past Featured Students▸
      </Link>
    </div>
  );
};

export default Featured;
