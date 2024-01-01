import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import milkReducer from "./milk/milkReducer";
import userReducer from "./use/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  milk: milkReducer,
  users: userReducer,
});

export default rootReducer;
