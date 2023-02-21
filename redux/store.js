import { createStore } from "redux";
import reducer from "./reducers/index";

/**
* 
* This function creates a Redux store with the specified initial state and returns it.
* @function
* @param {Object} initialState - The initial state of the Redux store
* @returns {Object} - The configured Redux store
*/
export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}