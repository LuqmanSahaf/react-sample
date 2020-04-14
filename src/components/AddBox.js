import React from "react";
import { connect } from "react-redux";
import { addBox } from "../redux/actions";
import ColorPicker from "./ColorPicker";

class AddBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      weight: 0.0,
      color: {
        r: 230,
        g: 32,
        b: 121
      },
      country: "Sweden"
    };
  }

  updateName = name => {
    this.setState({ name });
  };

  updateWeight = weight => {
    this.setState({ weight });
  };

  handleAddBox = () => {
    const c = this.state.color;
    const box = {
      name: this.state.name,
      weight: this.state.weight,
      color: c.r + "," + c.g + "," + c.b,
      country: this.state.country
    };
    this.props.addBox(box);
    this.setState({
      name: "",
      weight: 0.0,
      color: {
        r: 230,
        g: 32,
        b: 121
      },
      country: "China"
    });
  };

  updateCountry = country => {
    this.setState({ country });
  };

  updateColor = color => {
    console.log(color);
  };

  render() {
    return (
      <div>
        Name:{" "}
        <input
          onChange={e => this.updateName(e.target.value)}
          value={this.state.name}
        />
        <br />
        <br />
        Weight:{" "}
        <input
          onChange={e => this.updateWeight(e.target.value)}
          value={this.state.weight}
        />
        <br />
        <br />
        Color: <ColorPicker onChange={this.updateColor} />
        <br />
        <br />
        <label>
          Country:{" "}
          <select
            value={this.state.country}
            onChange={e => this.updateCountry(e.target.value)}
          >
            <option value="Sweden">Sweden</option>
            <option value="China">China</option>
            <option value="Australia">Australia</option>
            <option value="Brazil">Brazil</option>
          </select>
        </label>
        <br />
        <br />
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
