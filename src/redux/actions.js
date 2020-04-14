import {
  FETCH_BOXES_SUCCESS,
  ADD_BOX_SUCCESS,
  FETCH_COUNTRIES_SUCCESS
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

export const fetchCountries = () => {
  return dispatch => {
    getCountries()
      .then(res => {
        dispatch(fetchCountriesSuccess(res.data));
      })
      .catch(err => console.log(err.message));
  };
};

const fetchBoxesSuccess = boxes => ({
  type: FETCH_BOXES_SUCCESS,
  payload: boxes
});

const fetchCountriesSuccess = countries => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries
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

const getCountries = () => {
  return new Promise(resolve => setTimeout(resolve, 500)).then(() => {
    console.log("inside getCountries");
    return {
      data: [
        { name: "Sweden", multiplier: 1.3 },
        { name: "China", multiplier: 4 },
        { name: "Australia", multiplier: 8.6 },
        { name: "Brazil", multiplier: 7.2 }
      ]
    };
  });
};
