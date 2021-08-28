import createSagaMiddleware from "redux-saga";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { GetListingDataAction } from "./Listring_Actions";

export function* GetListingData() {
    let action: any;
    yield fetch('../data/test.json')
        .then(res => res.json())
        .then(data => {
            action = GetListingDataAction(data);
        })
        .catch(err => {
            throw new Error(err);
        });
    yield put(action);
}
export function* WatchGetListingData() {
    yield takeEvery('GetListingData', GetListingData);
}
export function* RootSagaListing() {
    yield all([
        call(WatchGetListingData)
    ]);
}

export const sagaMiddleWareListing = createSagaMiddleware();
