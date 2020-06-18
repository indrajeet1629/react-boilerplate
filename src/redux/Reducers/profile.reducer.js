import * as actions from "../action.constants";

const initialState = {
  isLoading: false,
  userDetails: {},
};

const userDetailsReceived = (state, action) => {
  return { ...state };
};

const handlers = {
  [actions.GET_USER_DETAILS]: userDetailsReceived,
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};
