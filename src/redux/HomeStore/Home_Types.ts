import { Action } from "redux";

export enum isExpandedActionEnum {
    expanded = 'EXPANDED',
    fold = 'FOLD'
}
export declare type isExpandedActionType = Action<isExpandedActionEnum.expanded> | Action<isExpandedActionEnum.fold>;
export enum isDarkThemeActionEnum {
    darktheme = 'DARKTHEME',
    lighttheme = 'LIGHTTHEME'
};
export enum ThemeType {
    DARK = '#000C17',
    LIGHT = '#FAFAFA'
}
export declare type isDarkThemeActionType = Action<isDarkThemeActionEnum.darktheme> | Action<isDarkThemeActionEnum.lighttheme>;
