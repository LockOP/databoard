import { LOG_IN, LOG_OUT, UPDATE_ROLE, UPDATE_USERNAME } from "../constants";

const initialState = {
  role: "user",
  username: "",
};

type Action = {
  type: string;
  data: any;
};

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...action.data,
      };
    case LOG_OUT:
      return initialState;
    case UPDATE_ROLE:
      return {
        ...state,
        role: action.data,
      };
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.data,
      };
    default:
      return state;
  }
};
