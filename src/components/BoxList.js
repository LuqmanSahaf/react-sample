import React from "react";
import { connect } from "react-redux";
import Box from "./Box";
// import { getBoxes } from "../redux/selectors";
import { getBoxes } from "../redux/selectors";
import SimpleTable from "./Table";

const BoxList = ({ boxes }) => (
  <div>
    <ul className="box-list">
      {boxes && boxes.length
        ? boxes.map((box, index) => {
            return <Box key={`box-${box.id}`} box={box} />;
          })
        : "No boxes, yay!"}
    </ul>
    <SimpleTable rows={boxes} />
  </div>
);

// const mapStateToProps = state => {
//   const { byIds, allIds } = state.boxes || {};
//   const boxes =
//     allIds && state.boxes.allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { boxes };
// };

const mapStateToProps = state => {
  const boxes = getBoxes(state);
  return { boxes };
  //   const allBoxes = getBoxes(state);
  //   return {
  //     boxes:
  //       visibilityFilter === VISIBILITY_FILTERS.ALL
  //         ? allBoxes
  //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
  //           ? allBoxes.filter(box => box.completed)
  //           : allBoxes.filter(box => !box.completed)
  //   };
};
// export default BoxList;
export default connect(mapStateToProps)(BoxList);
