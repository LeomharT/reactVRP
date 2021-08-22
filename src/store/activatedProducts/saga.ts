import { GET_ACTIVATED_PRODUCTS_ASYNC, GET_ACTIVATED_PRODUCTS } from './actions'
import { call, put, takeLatest } from 'redux-saga/effects'
import api from './api'
import { SagaIterator } from 'redux-saga'

export function* getActivatedProductsAsync(): SagaIterator {
	try {
		const activatedProducts = yield call(api.getActivatedProducts)
		if (activatedProducts) {
			yield put({
				type: GET_ACTIVATED_PRODUCTS,
				payload: {
					activatedProducts
				}
			})
		}
		
	} catch(e) {
		console.log(e)
	}
}

export function* watchActivatedProductsAsync() {
	yield takeLatest(GET_ACTIVATED_PRODUCTS_ASYNC, getActivatedProductsAsync)
}