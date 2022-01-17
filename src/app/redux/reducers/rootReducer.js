import { combineReducers } from "redux";
import commonReducer from "./commonReducer";
import loginReducer from "./loginReducer";
import HomePageReducer from "./HomePageReducer";

const rootReducer = combineReducers({
  common: commonReducer,
  login: loginReducer,
  home: HomePageReducer,
});

export default rootReducer;
