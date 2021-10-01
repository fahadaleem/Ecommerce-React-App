import { SET_PAGE_NAME } from "./navbarTypes";

const handleSetPageName = (pageName) => {
  return {
    type: SET_PAGE_NAME,
    payload: pageName,
  };
};

const handleSetPageNameAction = (pageName) => {
  return (dispatch) => {
    dispatch(handleSetPageName(pageName));
  };
};

export { handleSetPageNameAction };
