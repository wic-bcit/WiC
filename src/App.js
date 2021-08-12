import Home from "./components/Home";
import PastEvents from "./components/Event/PastEvents";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/past-events">
        <PastEvents />
      </Route>
    </Switch>
  );
}

export default App;
