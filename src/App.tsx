import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import EventsPage from "./components/Events/EventsPage";
import TeamPage from "./components/Execs/TeamPage";

import { home_route, events_route, team_route } from "./Routes";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Routes>
              <Route path={home_route} element={<HomePage />} />
              <Route path={events_route} element={<EventsPage />} />
              <Route path={team_route} element={<TeamPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
