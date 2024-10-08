import React from "react";
import { Link } from "react-router-dom";
import EntryTemplate from "./EntryTemplate";
import "./Blog.css";

// blog section on home page
export default function Blog(props: any) {
  return (
    <div className="Section">
      <h1 className="Title">Tech Blog</h1>
      <div className="Blog" id="Blog">
        <div className="blog-container">
          <EntryTemplate preview={props.preview} />
          <div className="btn-container">
            <Link className={"page-link"} to="/blog-page">
              Checkout our Past Entries ▸
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
