import Home from "./components/Home";
import PastEvents from "./components/Event/PastEvents";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/past-events" component={PastEvents}></Route>
    </Router>
  );
}

export default App;
