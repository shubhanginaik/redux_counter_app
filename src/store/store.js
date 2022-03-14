import { createStore } from "redux";
// if we want to see redux reducer function in browser,we can send middleware packages i.e thunk as parameter to composeWithDevTools
import { composeWithDevTools } from "@redux-devtools/extension";
import reducer from "./reducer";

const store = createStore(reducer, composeWithDevTools());

export default store;