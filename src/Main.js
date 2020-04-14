import React from "react";
import "./styles.css";
import Home from "./Home";
import ListBoxes from "./ListBoxes";
import AddBoxes from "./AddBoxes";
// import store from "./redux/store";
import { Route, Link, HashRouter as Router } from "react-router-dom";

const Main = () => {
  return (
    <Router>
      <div>
        <h1>Box App</h1>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addBox">Add Box</Link>
          </li>
          <li>
            <Link to="/listBoxes">List of Boxes</Link>
          </li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/addBox" component={AddBoxes} />
          <Route path="/listBoxes" component={ListBoxes} />
        </div>
      </div>
    </Router>
  );
};

export default Main;
