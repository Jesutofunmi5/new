import { combineReducers } from "@reduxjs/toolkit";

import counter from "./counter.slice";

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
