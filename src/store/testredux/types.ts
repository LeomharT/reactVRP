import { Action } from "redux";
import { counterActionType } from "./store";

export type INCREMENTTYPE = Action<counterActionType.INCREMENT>;
export type DECReMENTTYPE = Action<counterActionType.DECREMENT>;

export type CounterActions = INCREMENTTYPE | DECReMENTTYPE;
