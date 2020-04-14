import React from "react";
import "./styles.css";
// import Home from "./Home";
// import ListBoxes from "./ListBoxes";
// import AddBoxes from "./AddBoxes";
// import store from "./redux/store";
// import { Route, Link, HashRouter as Router } from "react-router-dom";

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

// export default function App() {
//   return (
//     <div className="todo-app">
//       <h1>Todo List</h1>
//       <AddBox />
//       <BoxList />
//     </div>
//   );
// }
