import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import EventsPage from "./components/Events/EventsPage";
import BlogPage from "./components/Blog/BlogPage";
import "./App.css"; 
import { blog_route, events_route } from "./Routes";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Routes>
              <Route path={"/"} element={<HomePage />} />
              <Route path={events_route} element={<EventsPage />} />
              <Route path={blog_route} element={<BlogPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
