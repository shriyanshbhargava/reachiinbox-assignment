import { applyMiddleware, legacy_createStore } from "redux";
import { Reducer } from "./reducer";
import { thunk } from "redux-thunk";

const Store = legacy_createStore(Reducer,applyMiddleware(thunk))

export default Store