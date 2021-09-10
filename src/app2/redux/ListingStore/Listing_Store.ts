import { applyMiddleware, createStore } from "redux";
import { RootReducerListing } from "./Listing_Reducers";
import { RootSagaListing, sagaMiddleWareListing } from "./Listing_Sage";

export const ListingStore = createStore(
    RootReducerListing,
    applyMiddleware(sagaMiddleWareListing)
);

sagaMiddleWareListing.run(RootSagaListing);
