import { addWatchActionType, getListingActionType, getWatchActionType, ListingData, ListingDataActionEnums, WatchListActionEnums } from "./Listing_Types";

export const GetListingDataAction = (payload: ListingData[]): getListingActionType => {
    return (
        {
            type: ListingDataActionEnums.GetData,
            payload
        }
    );
};
export const GetWatchDataAction = (payload: ListingData[]): getWatchActionType => {
    return (
        {
            type: WatchListActionEnums.GetData,
            payload
        }
    );
};
export const AddWatchDataAction = (payload: ListingData[]): addWatchActionType => {
    return (
        {
            type: WatchListActionEnums.AddToWatchList,
            payload
        }
    );
};
