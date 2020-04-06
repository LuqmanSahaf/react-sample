import { ADD_BOX, TOGGLE_BOX } from "./actionTypes";

let nextBoxId = 0;

export const addBox = content => ({
  type: ADD_BOX,
  payload: {
    id: ++nextBoxId,
    content
  }
});

export const toggleBox = id => ({
  type: TOGGLE_BOX,
  payload: { id }
});
