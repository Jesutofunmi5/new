import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth.slice";
import message from "./message.slice";

const rootReducer = combineReducers({
  auth,
  message
});

export default rootReducer;
