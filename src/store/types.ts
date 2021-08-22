import { Action } from 'redux'

export interface ActionProps<T, P> extends Action<T> {
	payload: P
}