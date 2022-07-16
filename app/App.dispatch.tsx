import { createContext, Dispatch } from 'react';
import { DeliveryAction } from '../models/Delivery/deliveryReducer';
import { AppAction } from './App.actions';

export type AppActions = AppAction | DeliveryAction;

export const initialDispatcher: Dispatch<AppActions> = (_: AppActions) => {};

const AppDispatchContext =
	createContext<Dispatch<AppActions>>(initialDispatcher);

export default AppDispatchContext;
