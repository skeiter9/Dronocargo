import getDelivery from '../../models/Delivery/getDelivery';
import { AppStore } from '../App.context';
import api from '../../api/api';
import parseDeliverymodel from '../../models/Delivery/helpers/parseDeliverymodel';

const SESSION_STARTED_AT = 'sessionStartedAt';

function appActionInit(): AppStore {
	const _items = getDelivery();
	const sessionStartedAtRaw = api.read(SESSION_STARTED_AT);
	if (!sessionStartedAtRaw) {
		api.create(SESSION_STARTED_AT, JSON.stringify(new Date()));
	}
	const sessionStartedAt = sessionStartedAtRaw
		? (JSON.parse(sessionStartedAtRaw) as Date)
		: new Date();
	const items = parseDeliverymodel(_items);
	return { deliveries: items, sessionStartedAt };
}

export default appActionInit;
