import { isDarkThemeActionEnum, isDarkThemeActionType, isExpandedActionEnum, isExpandedActionType } from "./Home_Types";

export const SetSideBarToExpand = (): isExpandedActionType => {
    return (
        { type: isExpandedActionEnum.expanded }
    );
};
export const SetSideBarToFold = (): isExpandedActionType => {
    return (
        { type: isExpandedActionEnum.fold }
    );
};
export const SetToDarkTheme = (): isDarkThemeActionType => {
    return (
        { type: isDarkThemeActionEnum.darktheme }
    );
};
export const SetToLightTheme = (): isDarkThemeActionType => {
    return (
        { type: isDarkThemeActionEnum.lighttheme }
    );
};
