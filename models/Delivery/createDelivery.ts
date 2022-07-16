import api from '../../api/api';
import z from 'zod';
import { DB_DELIVERY_KEY, Delivery } from './Delivery';

export default function createDelivery(item: Delivery) {
	const store = api.read(DB_DELIVERY_KEY);
	const data = z.array(Delivery).parse(JSON.parse(store || '[]'));
	const newStore = [item].concat(...data);
	api.create(DB_DELIVERY_KEY, JSON.stringify(newStore));
	return newStore;
}
