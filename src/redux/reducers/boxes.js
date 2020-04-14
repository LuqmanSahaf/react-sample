import {
  ADD_BOX,
  TOGGLE_BOX,
  FETCH_BOXES_SUCCESS,
  ADD_BOX_SUCCESS
} from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_BOX: {
      const { id, name, weight, color, country } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            name,
            weight,
            color,
            country,
            completed: false
          }
        }
      };
    }
    case TOGGLE_BOX: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    case FETCH_BOXES_SUCCESS: {
      const boxes = action.payload;
      console.log(boxes);
      return {
        allIds: boxes.map(box => box.id),
        byIds: boxes.reduce(function(map, obj) {
          map[obj.id] = obj;
          return map;
        }, {})
      };
    }
    case ADD_BOX_SUCCESS: {
      const box = action.payload;
      console.log(box);
      return {
        ...state,
        allIds: [...state.allIds, box.id],
        byIds: {
          ...state.byIds,
          [box.id]: {
            ...box,
            completed: false
          }
        }
      };
    }
    default:
      return state;
  }
}
