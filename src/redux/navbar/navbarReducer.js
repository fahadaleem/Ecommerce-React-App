import { SET_PAGE_NAME } from "./navbarTypes";

const initialState = {
  pageName: "Summary Report",
};

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE_NAME:
      return {
        ...state,
        pageName: action.payload,
      };
    default:
      return state;
  }
};

export default navbarReducer;
