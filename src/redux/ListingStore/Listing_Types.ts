import { ActionProps } from "../../store/types";

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
export type getListingActionType = ActionProps<ListingDataActionEnums.GetData, ListingData[]>;
