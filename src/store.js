import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/RootReducer";

// Initial state is an object
const initialState = {};

// From redux applyMiddleware that takes an spread array
const middleware = [thunk];

// Our variable store is a function with three parameters, rootReducer that conbines, initialState and a function from redux named applyMiddleware
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
