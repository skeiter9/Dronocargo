import createDelivery from './createDelivery';
import deleteDelivery from './deleteDelivery';
import updateDelivery from './updateDelivery';

import { Delivery, DeliveryModel } from './Delivery';
import searchDelivery from './searchDelivery';
import parseDeliverymodel from './helpers/parseDeliverymodel';

export enum DeliveryActionTypes {
	SAVE_DELIVERY = 'SAVE_DELIVERY',
	REMOVE_DELIVERY = 'REMOVE_DELIVERY',
	UPDATE_DELIVERY = 'UPDATE_DELIVERY',
	SEARCH_DELIVERY = 'SEARCH_DELIVERY',
}

export interface DeliveryAction {
	type: DeliveryActionTypes;
	payload: {
		item?: Delivery;
		id?: string;
		searchText?: string;
	};
}

function deliveryReducer(
	state: DeliveryModel[],
	{ type, payload }: DeliveryAction
) {
	switch (type) {
		case DeliveryActionTypes.SAVE_DELIVERY:
			if (!payload.item) return state;
			return parseDeliverymodel(createDelivery(payload.item));
		case DeliveryActionTypes.REMOVE_DELIVERY:
			if (!payload.id) return state;
			return parseDeliverymodel(deleteDelivery(payload.id));
		case DeliveryActionTypes.UPDATE_DELIVERY:
			if (!payload.item) return state;
			return parseDeliverymodel(updateDelivery(payload.item));
		case DeliveryActionTypes.SEARCH_DELIVERY:
			return searchDelivery(payload.searchText);
		default:
			return state;
	}
}

export default deliveryReducer;
