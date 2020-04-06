import React from "react";
import { connect } from "react-redux";
import { addBox } from "../redux/actions";

class AddBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddBox = () => {
    this.props.addBox(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-box" onClick={this.handleAddBox}>
          Add Box
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addBox }
)(AddBox);
// export default AddBox;
