import {BookReducer} from "./features/BookReducer";
import {createStore} from "redux";



export const store = createStore(BookReducer);