import React from "react";
import { Link } from "react-router-dom";
import EntryTemplate from "./EntryTemplate";
import SimpleNavbar from "../Reuse/Navbar/SimpleNavbar";
import Footer from "../Reuse/Footer/Footer";
import { home_route } from "../../Routes";
import "./Blog.css";

// external page
export default function BlogPage() {
    return (
        <div className="BlogPage">
            <SimpleNavbar />
            <h1 className="Title">Tech Blog</h1>
            <div className="blog-container">
                <EntryTemplate preview={0} />
                <div className="btn-container">
                    <Link className={"page-link"} to={"/"}>
                        ◂ Return Home
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}
