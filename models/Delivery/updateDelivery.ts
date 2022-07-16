import api from '../../api/api';
import z from 'zod';
import { DB_DELIVERY_KEY, Delivery } from './Delivery';

function updateDelivery(item: Delivery): Delivery[] {
	const store = api.read(DB_DELIVERY_KEY);
	const data = z.array(Delivery).parse(JSON.parse(store || '[]'));
	const i = data.findIndex((_item) => _item.id === item.id);
	if (i === -1) return data;
	const newStore = [...data];
	newStore[i] = { ...data[i], ...item };
	api.update(DB_DELIVERY_KEY, JSON.stringify(newStore));
	return newStore;
}

export default updateDelivery;
