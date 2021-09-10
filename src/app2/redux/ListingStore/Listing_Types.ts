import { ActionProps } from "../../../store/types";

export declare interface ListingData {
    companies: string;
    openingprice: number;
    bidprice: number;
    askprice: number;
    highprice: number;
    lowprice: number;
    closeprice: number;
}
export enum ListingDataActionEnums {
    GetData = "GETLISTINGDATA"
}
export enum WatchListActionEnums {
    GetData = "GETWATCHLISTDATA",
    AddToWatchList = "ADDWATCHLISTDATA",
};
export type getListingActionType = ActionProps<ListingDataActionEnums.GetData, ListingData[]>;
export type getWatchActionType = ActionProps<WatchListActionEnums.GetData, ListingData[]>;
export type addWatchActionType = ActionProps<WatchListActionEnums.AddToWatchList, ListingData[]>;
