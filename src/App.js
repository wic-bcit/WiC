import Navbar from "./components/Navbar/Navbar";
import WiC from "./components/WiC";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <WiC />
      <AboutUs />
      <Events />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
