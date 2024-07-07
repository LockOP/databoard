import { combineReducers } from "redux";
import { clientReducer } from "./reducers/clientReducer";
import { authReducer } from "./reducers/authReducer";

const rootReducer = combineReducers<{
  clientReducer: any;
  authReducer: any;
}>({
  clientReducer: clientReducer,
  authReducer: authReducer,
});

export default rootReducer;
