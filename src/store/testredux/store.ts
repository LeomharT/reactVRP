import { createStore } from "redux";
import { rReducer } from "./reducers";

export const store = createStore(rReducer);
export enum counterActionType {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT"
};


export const storeb = createStore(rReducer);
