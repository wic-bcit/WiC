import * as React from "react";
import Navbar from "../Reuse/Navbar/Navbar";
import Footer from "../Reuse/Footer/Footer";
import Events from "../Events/Events";
import WiC from "./WiC";
import AboutUs from "./AboutUs";
import Blog from "../Blog/Blog";
import Join from "./Join";

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <WiC />
        <AboutUs />
        <Events preview={3} />
        <Blog />
        <Join />
        <Footer />
      </div>
    );
  }
}
