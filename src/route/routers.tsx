import { ReactComponent as BookClosedFillIcon } from '@zendeskgarden/svg-icons/src/16/book-closed-fill.svg';
import { ReactComponent as ClipboardListFillIcon } from '@zendeskgarden/svg-icons/src/16/clipboard-list-fill.svg';
import { ReactComponent as ClipboardListStrokeIcon } from '@zendeskgarden/svg-icons/src/16/clipboard-list-stroke.svg';
import { ReactComponent as LineGraphFillIcon } from '@zendeskgarden/svg-icons/src/16/line-graph-fill.svg';
import { ReactComponent as UserListFillIcon } from '@zendeskgarden/svg-icons/src/16/user-list-fill.svg';
import React, { ReactElement } from "react";
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
    icon?: ReactElement<any, any>;
}

export const router: RouterType[] = [
    {
        title: "HomePage", path: "/HomePage", component: HomePage, exact: false, childrenRoute: [
            { title: "Listing", path: "/HomePage/Listing", component: Listing, exact: true, icon: <ClipboardListStrokeIcon /> },
            { title: "WatchList", path: "/HomePage/WatchList", component: WatchList, exact: true, icon: <LineGraphFillIcon /> },
            { title: "Hodings", path: "/HomePage/Hodings", component: Hodings, exact: true, icon: <ClipboardListFillIcon /> },
            { title: "Orders", path: "/HomePage/Orders", component: Orders, exact: true, icon: <BookClosedFillIcon /> },
            { title: "UserProfile", path: "/HomePage/UserProfile", component: UserProfile, exact: true, icon: <UserListFillIcon /> },
        ]
    }
];
