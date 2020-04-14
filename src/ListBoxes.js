import React, { Component } from "react";
import BoxList from "./components/BoxList";
import "./styles.css";
import { fetchBoxes, fetchCountries } from "./redux/actions";
import { connect } from "react-redux";

class ListBoxes extends Component {
  componentDidMount() {
    this.props.fetchBoxes();
    this.props.fetchCountries();
  }

  render() {
    return (
      <div className="box-app">
        <h2>Box List</h2>
        <BoxList />
      </div>
    );
  }
}

export default connect(
  null,
  {
    fetchBoxes: fetchBoxes,
    fetchCountries: fetchCountries
  }
)(ListBoxes);
