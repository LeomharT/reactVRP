import { combineReducers } from "redux";
import activatedProductsReducer from './activatedProducts/reducer'

export const rootReducer = combineReducers({
 	activatedProducts: activatedProductsReducer,
})


export type RootState = ReturnType<typeof rootReducer>