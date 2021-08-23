import { combineReducers } from "redux";

export const temp = () => {
    return null;
};



export const RootReducerHome = combineReducers({
    temp
});

export type RootStateHome = ReturnType<typeof RootReducerHome>;
