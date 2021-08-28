import { getListingActionType, ListingData, ListingDataActionEnums } from "./Listing_Types";

export const GetListingDataAction = (payload: ListingData[]): getListingActionType => {
    return (
        {
            type: ListingDataActionEnums.GetData,
            payload
        }
    );
};
