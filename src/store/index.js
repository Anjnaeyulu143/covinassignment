
import { createStore } from "redux";
import { usersReducer } from "./Reducers";

const store = createStore(usersReducer)

export default store