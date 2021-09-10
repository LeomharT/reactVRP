import { Reducer } from "react";
import { combineReducers } from "redux";
import { ActionProps } from "../../../store/types";
import { ListingData, WatchListActionEnums } from "./Listing_Types";

export const GetListingDataReducer: Reducer<ListingData[], ActionProps<any, ListingData[]>> =
    (state: ListingData[] = [], action: ActionProps<any, ListingData[]>): ListingData[] => {
        if (action.payload)
            state = action.payload;
        return state;
    };

export const WatchListDataReducer: Reducer<ListingData[], ActionProps<WatchListActionEnums, ListingData[]>> =
    (state: ListingData[] = [], action: ActionProps<WatchListActionEnums, ListingData[]>): ListingData[] => {
        switch (action.type) {
            case WatchListActionEnums.GetData: {
                if (action.payload)
                    state = action.payload;
                return state;
            }
            case WatchListActionEnums.AddToWatchList: {
                console.log(action.payload);
                if (!action.payload) return state;
                state = state.concat(action.payload);
                return state;
            }
            default: {
                return state;
            }
        }

    };

export const RootReducerListing = combineReducers({
    GetListingDataReducer,
    WatchListDataReducer,
});

export type RootStateListing = ReturnType<typeof RootReducerListing>;
