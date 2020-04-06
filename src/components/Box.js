import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleBox } from "../redux/actions";

const Box = ({ box, toggleBox }) => (
  <li className="box-item" onClick={() => toggleBox(box.id)}>
    {box && box.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "box-item__text",
        box && box.completed && "box-item__text--completed"
      )}
    >
      {box.content}
    </span>
  </li>
);

// export default Box;
export default connect(
  null,
  { toggleBox }
)(Box);
