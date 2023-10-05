import React from "react";
import "./index.css";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
