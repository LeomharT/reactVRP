import { isDarkThemeActionEnum, isDarkThemeActionType, isExpandedActionEnum, isExpandedActionType, setPrimaryHueActionType, setPrimaryHueEnum } from "./Home_Types";

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
export const SetPrimaryHue = (payload: string): setPrimaryHueActionType => {
    return (
        {
            type: setPrimaryHueEnum.setPrimary,
            payload
        }
    );
};
