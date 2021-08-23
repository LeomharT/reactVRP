import { Action, combineReducers } from "redux";
import { counterActionType } from "./store";

export const counter: any = (
    state: any,
    action: Action<any>
) => {
    if (typeof state == 'undefined') return 1;
    console.log(action.type);
    switch (action.type) {
        case counterActionType.INCREMENT:
            return ++state;
        case counterActionType.DECREMENT:
            return --state;
        default:
            return state;
    }
};

export const rReducer = combineReducers({
    counter
});

export type RState = ReturnType<typeof rReducer>;
