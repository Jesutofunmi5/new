import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth.slice";
import counter from "./counter.slice";
import message from "./message.slice";

const rootReducer = combineReducers({
  auth,
  counter,
  message
});

export default rootReducer;
