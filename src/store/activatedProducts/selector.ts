import { RootState } from '../reducers'
import { ActivatedProductsState } from './types'

export const activatedProductsSelector = (state: RootState): ActivatedProductsState => state.activatedProducts