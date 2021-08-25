import { RootStateHome } from "./Home_Reducers";

export const IsExpandedSelector = (state: RootStateHome) => state.IsExpandedReducer;
export const IsDarkThemeSelector = (state: RootStateHome) => state.IsDarkThemeReducer;
export const SetPrimaryHueSelecto = (state: RootStateHome) => state.SetPrimaryHueReducer;
