import { Reducer } from "react";
import { Action, combineReducers } from "redux";
import { ActionProps } from "../../store/types";
import { isDarkThemeActionEnum, isExpandedActionEnum, setPrimaryHueEnum } from "./Home_Types";


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
    (status: boolean = false, action: Action<isDarkThemeActionEnum>): boolean => {
        switch (action.type) {
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

export const SetPrimaryHueReducer: Reducer<string, ActionProps<setPrimaryHueEnum, string>> =
    (state: string = 'blue', action: ActionProps<setPrimaryHueEnum, string>) => {
        console.log(action.payload);
        switch (action.type) {
            case setPrimaryHueEnum.setPrimary: {
                state = action.payload;
                return state;
            }
            default: {
                return state;
            }
        }
    };


export const RootReducerHome = combineReducers({
    IsExpandedReducer,
    IsDarkThemeReducer,
    SetPrimaryHueReducer
});

export type RootStateHome = ReturnType<typeof RootReducerHome>;
