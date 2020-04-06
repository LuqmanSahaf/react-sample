import React from "react";
import BoxList from "./components/BoxList";
import "./styles.css";

export default function ListBoxes() {
  return (
    <div className="box-app">
      <h2>Box List</h2>
      <BoxList />
    </div>
  );
}
