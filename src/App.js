import Home from "./components/Home";
import PastEvents from "./components/Event/PastEvents";
import PastExecs from "./components/Execs/PastExecs";
import { HashRouter, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter basename="/">
      <ScrollToTop />
      <Route exact path="/" component={Home} />
      <Route exact path="/past-events" component={PastEvents} />
      <Route exact path="/past-execs" component={PastExecs} />
    </HashRouter>
  );
}

export default App;
