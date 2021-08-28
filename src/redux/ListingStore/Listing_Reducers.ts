import { Reducer } from "react";
import { combineReducers } from "redux";
import { ActionProps } from "../../store/types";
import { ListingData } from "./Listing_Types";

export const GetListingDataReducer: Reducer<ListingData[], ActionProps<any, ListingData[]>> =
    (state: ListingData[] = [], action: ActionProps<any, ListingData[]>): ListingData[] => {
        if (action.payload)
            state = action.payload;
        return state;
    };

export const RootReducerListing = combineReducers({
    GetListingDataReducer,
});

export type RootStateListing = ReturnType<typeof RootReducerListing>;
