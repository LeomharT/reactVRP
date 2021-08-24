import React from "react";
import Hodings from "../pages/home/Hodings";
import HomePage from "../pages/home/HomePage";
import Listing from "../pages/home/Listing";
import Orders from "../pages/home/Orders";
import UserProfile from "../pages/home/UserProfile";
import WatchList from "../pages/home/WatchList";

export interface RouterType {
    title: string,
    path: string,
    component: React.FunctionComponent,
    exact: boolean;
    childrenRoute?: RouterType[];
}

export const router: RouterType[] = [
    {
        title: "HomePage", path: "/HomePage", component: HomePage, exact: false, childrenRoute: [
            { title: "Listing", path: "/HomePage/Listing", component: Listing, exact: true },
            { title: "WatchList", path: "/HomePage/WatchList", component: WatchList, exact: true },
            { title: "Hodings", path: "/HomePage/Hodings", component: Hodings, exact: true },
            { title: "Orders", path: "/HomePage/Orders", component: Orders, exact: true },
            { title: "UserProfile", path: "/HomePage/UserProfile", component: UserProfile, exact: true },
        ]
    }
];
