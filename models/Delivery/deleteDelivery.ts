import api from '../../api/api';
import z from 'zod';
import { DB_DELIVERY_KEY, Delivery } from './Delivery';

export default function deleteDelivery(id: string) {
	const store = api.read(DB_DELIVERY_KEY);
	const data = z.array(Delivery).parse(JSON.parse(store || '[]'));
	const i = data.findIndex((_item) => _item.id === id);
	if (i === -1) return data;
	const newStore = [...data];
	newStore.splice(i, 1);
	api.update(DB_DELIVERY_KEY, JSON.stringify(newStore));
	return newStore;
}
