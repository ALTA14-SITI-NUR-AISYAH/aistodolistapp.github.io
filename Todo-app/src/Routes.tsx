import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import TodoDetail from "./TodoDetail";

const Routes: React.FC = () => {
  return (
    <Router>
      <div>
        <Route path="/" Component={Home} />
        <Route path="/todos/:id" Component={TodoDetail} />
      </div>
    </Router>
  );
};

export default Routes;
