import { IModule } from 'redux-dynamic-modules'
import activatedProductsReducer from './reducer'
import { RootState } from '../reducers'
import { watchActivatedProductsAsync } from './saga'

interface ISagaModule<T> extends IModule<T> {
    sagas: any
}

export function getActivatedProductsModule(): ISagaModule<RootState> {
    return {
        id: "activatedProducts",
        reducerMap: {
            activatedProducts: activatedProductsReducer,
        },
        // Actions to fire when this module is added/removed
        // initialActions: [],
        // finalActions: []
        sagas: [ watchActivatedProductsAsync ]
    };
}