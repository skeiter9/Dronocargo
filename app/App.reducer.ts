import deliveryReducer, {
	DeliveryActionTypes,
} from '../models/Delivery/deliveryReducer';
import { AppActionTypes } from './App.actions';
import { AppStore } from './App.context';
import { AppActions } from './App.dispatch';
import appActionInit from './trunks/appActionInit';

function AppReducer(state: AppStore, action: AppActions) {
	const { type } = action;
	//console.log('AppReducer action', action);
	switch (type) {
		case AppActionTypes.INIT:
			return appActionInit();
		case DeliveryActionTypes.SAVE_DELIVERY:
		case DeliveryActionTypes.REMOVE_DELIVERY:
		case DeliveryActionTypes.UPDATE_DELIVERY:
		case DeliveryActionTypes.SEARCH_DELIVERY:
			const deliveries = deliveryReducer(state.deliveries, action);
			return {
				...state,
				deliveries,
			};
		default:
			return state;
	}
	return state;
}

export default AppReducer;
