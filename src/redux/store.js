import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./reducers/rootReducers";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default process.env.NODE_ENV === "development" ?
    createStore(rootReducers, composeEnhancers(applyMiddleware(thunk))) :
    createStore(rootReducers, applyMiddleware(thunk));
  