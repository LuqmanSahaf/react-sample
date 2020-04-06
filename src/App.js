import React from "react";
import AddBox from "./components/AddBox";
import BoxList from "./components/BoxList";
import "./styles.css";

export default function App() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddBox />
      <BoxList />
    </div>
  );
}
