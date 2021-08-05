import WiC from "./WiC";
import Navbar from "./Navbar/Navbar";
import AboutUs from "./AboutUs";
import Events from "./Event/Events";
import Team from "./Team";
import Contact from "./Contact";
import Footer from "./Footer";

import React from "react";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <WiC />
      <AboutUs />
      <Events preview="3" />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
