import Home from "./components/Home";
import PastEvents from "./components/Event/PastEvents";
import PastExecs from "./components/Execs/PastExecs";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/WiC" component={Home}></Route>
      <Route exact path="/past-events" component={PastEvents}></Route>
      <Route exact path="/past-execs" component={PastExecs}></Route>
    </Router>
  );
}

export default App;
