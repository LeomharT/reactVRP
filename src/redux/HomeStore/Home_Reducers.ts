import { Reducer } from "react";
import { Action, combineReducers } from "redux";
import { isDarkThemeActionEnum, isExpandedActionEnum } from "./Home_Types";



//interface and return type
export const IsExpandedReducer: Reducer<boolean, Action<isExpandedActionEnum>> =
    (state: boolean = true, action: Action<isExpandedActionEnum>): boolean => {
        switch (action.type) {
            case isExpandedActionEnum.expanded: {
                return !state;
            }
            case isExpandedActionEnum.fold: {
                return !state;
            }
            default: {
                return state;
            }
        }
    };
export const IsDarkThemeReducer: Reducer<boolean, Action<isDarkThemeActionEnum>> =
    (status: boolean = false, actions: Action<isDarkThemeActionEnum>): boolean => {
        switch (actions.type) {
            case isDarkThemeActionEnum.darktheme: {
                return !status;
            }
            case isDarkThemeActionEnum.lighttheme: {
                return !status;
            }
            default: {
                return status;
            }
        }
    };


export const RootReducerHome = combineReducers({
    IsExpandedReducer,
    IsDarkThemeReducer
});

export type RootStateHome = ReturnType<typeof RootReducerHome>;
