import { RootStateListing } from "./Listing_Reducers";

export const GetListingDataSelector = (state: RootStateListing) => state.GetListingDataReducer;
export const GetWatchDataSelector = (state: RootStateListing) => state.WatchListDataReducer;
