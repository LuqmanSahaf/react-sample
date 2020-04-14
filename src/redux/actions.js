import {
  // ADD_BOX,
  TOGGLE_BOX,
  FETCH_BOXES_SUCCESS,
  ADD_BOX_SUCCESS
} from "./actionTypes";
// import { get, post } from "axios";

export const addBox = box => {
  return dispatch => {
    postBox(box)
      .then(res => {
        dispatch(addBoxSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const toggleBox = id => ({
  type: TOGGLE_BOX,
  payload: { id }
});

export const fetchBoxes = () => {
  return dispatch => {
    getBoxes()
      .then(res => {
        dispatch(fetchBoxesSuccess(res.data));
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};

const fetchBoxesSuccess = boxes => ({
  type: FETCH_BOXES_SUCCESS,
  payload: boxes
});

const addBoxSuccess = box => ({
  type: ADD_BOX_SUCCESS,
  payload: box
});

const getBoxes = () => {
  console.log("inside get boxes");
  return new Promise(resolve => setTimeout(resolve, 3000)).then(() => {
    return {
      data: [
        {
          id: Math.floor(Math.random() * Math.floor(99999999)),
          content: "abc",
          completed: false,
          name: "abc",
          weight: 1.4,
          color: "133,54,33",
          country: "Sweden"
        },
        {
          id: Math.floor(Math.random() * Math.floor(99999999)),
          content: "def",
          completed: false,
          name: "def",
          weight: 2.5,
          color: "89,230,17",
          country: "China"
        }
      ]
    };
  });
};

const postBox = box => {
  return new Promise(resolve => setTimeout(resolve, 500)).then(() => {
    console.log("inside post box: ", box);
    return {
      data: {
        id: Math.floor(Math.random() * Math.floor(99999999)),
        name: box.name,
        weight: box.weight,
        color: box.color,
        country: box.country,
        completed: false
      }
    };
  });
};
