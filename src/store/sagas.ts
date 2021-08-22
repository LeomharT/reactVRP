import { watchActivatedProductsAsync } from './activatedProducts/saga'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
	yield all([watchActivatedProductsAsync()])
}