import WiC from "./WiC";
import Navbar from "./Navbar/Navbar";
import AboutUs from "./AboutUs";
import Events from "./Event/Events";
import Join from "./Join";
import Footer from "./Footer";

import React from "react";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <WiC />
      <AboutUs />
      <Events preview="3" />
      <Join />
      <Footer />
    </div>
  );
};

export default Home;
