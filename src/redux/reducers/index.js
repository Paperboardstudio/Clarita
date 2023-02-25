import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

/**
* 
* @brief The root reducer function for the Redux store.
* @name rootReducer
* @param {object} state - The current state of the Redux store.
* @param {object} action - The action being dispatched.
* @returns {object} - The new state of the Redux store after the action has been applied.
*/
let reducers = combineReducers({
  cartReducer: cartReducer,
})

const rootReducer = (state, action) => {
  return reducers(state, action);
}

export default rootReducer