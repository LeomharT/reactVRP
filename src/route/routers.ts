import React from "react";
import HomePage from "../pages/home/HomePage";

export interface RouterType {
    title: string,
    path: string,
    component: React.FunctionComponent,
    exact: boolean;
}

export const router: RouterType[] = [
    { title: "HomePage", path: "/HomePage", component: HomePage, exact: false }
];
