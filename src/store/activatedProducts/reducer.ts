import { ActivatedProductsState, ActionTypes } from './types';
import { GET_ACTIVATED_PRODUCTS } from './actions';
import { Reducer } from 'redux';

const initialState: ActivatedProductsState = {
    activatedProducts: []
};

const reducer: Reducer<ActivatedProductsState> = (
    state = initialState,
    action: ActionTypes
): ActivatedProductsState => {
    switch (action.type) {
        case GET_ACTIVATED_PRODUCTS: {
            const { payload: { activatedProducts } } = action;
            return {
                ...state,
                activatedProducts
            };
        }

        default:
            return state;
    }
};

export default reducer;
