import { Action } from 'redux'
import { GET_ACTIVATED_PRODUCTS, GET_ACTIVATED_PRODUCTS_ASYNC } from './actions'
import { ActionProps } from '../types'

export type ActivatedProduct = {
	id: string,
	name: string
}

export interface ActivatedProductsState {
	activatedProducts: ActivatedProduct[]
}

export type GetActivatedProductsAsyncAction = Action<typeof GET_ACTIVATED_PRODUCTS_ASYNC>

export type GetActivatedProductsActionPayload = {
	activatedProducts: ActivatedProduct[]
}

export type GetActivatedProductsAction = ActionProps<typeof GET_ACTIVATED_PRODUCTS, GetActivatedProductsActionPayload>

export type ActionTypes = GetActivatedProductsAsyncAction | GetActivatedProductsAction