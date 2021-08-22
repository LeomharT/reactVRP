import { ActionTypes, GetActivatedProductsActionPayload } from './types'

export const GET_ACTIVATED_PRODUCTS = 'GET_ACTIVATED_PRODUCTS'
export const GET_ACTIVATED_PRODUCTS_ASYNC = 'GET_ACTIVATED_PRODUCTS_ASYNC'

export const getActivatedProductsAsyncAction = (): ActionTypes => {
	return {
		type: GET_ACTIVATED_PRODUCTS_ASYNC
	}
}

export const getActivatedProductsAction = (payload: GetActivatedProductsActionPayload): ActionTypes => {
	return {
		type: GET_ACTIVATED_PRODUCTS,
		payload
	}
}