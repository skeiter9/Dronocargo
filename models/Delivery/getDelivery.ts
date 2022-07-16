import api from '../../api/api';
import z from 'zod';
import { DB_DELIVERY_KEY, Delivery } from './Delivery';

export default function getDelivery() {
	const store = api.read(DB_DELIVERY_KEY);
	const data = z.array(Delivery).parse(JSON.parse(store || '[]'));
	return data;
}
