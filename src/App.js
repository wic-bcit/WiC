import Home from "./components/Home";
import PastEvents from "./components/Event/PastEvents";
import { HashRouter, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter basename="/">
      <ScrollToTop />
      <Route exact path="/" component={Home} />
      <Route exact path="/past-events" component={PastEvents} />
    </HashRouter>
  );
}

export default App;
