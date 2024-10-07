import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import EventsPage from "./components/Events/EventsPage";
import TeamPage from "./components/Execs/TeamPage";
import BlogPage from "./components/Blog/BlogPage";
import "./App.css"; 

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Routes>
              <Route path={"/"} element={<HomePage />} />
              <Route path={"/events-page"} element={<EventsPage />} />
              <Route path={"/team-page"} element={<TeamPage />} />
              <Route path={"/blog-page"} element={<BlogPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
