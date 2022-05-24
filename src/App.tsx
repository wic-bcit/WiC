import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import EventsArchivePage from "./components/Events/EventsArchivePage";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/event-archive" element={<EventsArchivePage />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
