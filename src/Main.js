import React from "react";
import "./styles.css";
import Home from "./Home";
import ListBoxes from "./ListBoxes";
import AddBoxes from "./AddBoxes";
import { ConnectedRouter } from "connected-react-router";
import { Route, NavLink, Switch } from "react-router";
import { Provider } from "react-redux";
// import store from "./redux/store";
import PropTypes from "prop-types";
import configureStore from "./configureStore";

const store = configureStore();

const Main = ({ history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <h1>Box App</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/addBox">Add Box</NavLink>
            </li>
            <li>
              <NavLink to="/listBoxes">List of Boxes</NavLink>
            </li>
          </ul>
          <div className="content">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/addBox" component={AddBoxes} />
              <Route path="/listBoxes" component={ListBoxes} />
            </Switch>
          </div>
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

Main.propTypes = {
  history: PropTypes.object
};

export default Main;
