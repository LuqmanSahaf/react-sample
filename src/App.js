import React from "react";
import "./styles.css";

import AddBox from "./components/AddBox";
import BoxList from "./components/BoxList";

class App extends React.Component {
  render() {
    return (
      <div className="todo-app">
        <h1>Todo List</h1>
        <AddBox />
        <BoxList />
      </div>
    );
  }
}
export default App;
