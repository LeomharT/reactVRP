import { counterActionType } from "./store";
import { CounterActions } from "./types";

export const INCREMENT = (): CounterActions => {
    return ({ type: counterActionType.INCREMENT });
};
export const DECREMENT = (): CounterActions => {
    return ({ type: counterActionType.DECREMENT });
};
