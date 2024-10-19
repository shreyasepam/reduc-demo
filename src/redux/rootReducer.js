import { combineReducers } from "redux";
import { todoReducer } from "./todo/todoSlice";

export const rootReducer =  combineReducers({
    todo: todoReducer
})