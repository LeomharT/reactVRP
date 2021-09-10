import createSagaMiddleware from "redux-saga";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { AddWatchDataAction, GetListingDataAction, GetWatchDataAction } from "./Listring_Actions";

export function* GetListingData() {
    let action: any;
    yield fetch('../../data/test.json')
        .then(res => res.json())
        .then(data => {
            action = GetListingDataAction(data);
        })
        .catch(err => {
            throw new Error(err);
        });
    yield put(action);
}
export function* GetWatchData() {
    let action: any;
    yield fetch('../../data/watchdata.json')
        .then(res => res.json())
        .then(data => {
            action = GetWatchDataAction(data);
        })
        .catch(err => {
            throw new Error(err);
        });
    yield put(action);
}
export function* AddWatchData() {
    let action: any;
    const data = [
        {
            "companies": "alibaba",
            "openingprice": 21.11,
            "bidprice": 12.11,
            "askprice": 11.12,
            "highprice": 20,
            "lowprice": 10,
            "closeprice": 20
        },
        {
            "companies": "tencent",
            "openingprice": 21.11,
            "bidprice": 12.11,
            "askprice": 11.12,
            "highprice": 20,
            "lowprice": 10,
            "closeprice": 20
        },
        {
            "companies": "baidu",
            "openingprice": 21.11,
            "bidprice": 12.11,
            "askprice": 11.12,
            "highprice": 20,
            "lowprice": 10,
            "closeprice": 20
        }
    ];
    yield action = AddWatchDataAction(data);
    yield put(action);
}
export function* WatchGetListingData() {
    yield takeEvery('GetListingData', GetListingData);
}
export function* WatchGetWatchData() {
    yield takeEvery("GetWatchData", GetWatchData);
}
export function* WatchAddWatchData() {
    yield takeEvery("AddWatchData", AddWatchData);
}
export function* RootSagaListing() {
    yield all([
        call(WatchGetListingData),
        call(WatchGetWatchData),
        call(WatchAddWatchData)
    ]);
}

export const sagaMiddleWareListing = createSagaMiddleware();
