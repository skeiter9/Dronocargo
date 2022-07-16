import api from '../../api/api';
import z from 'zod';
import { DB_DELIVERY_KEY, Delivery, DeliveryModel } from './Delivery';
import Fuse from 'fuse.js';
import parseDeliverymodel from './helpers/parseDeliverymodel';

function searchDelivery(text: string = ''): DeliveryModel[] {
	const store = api.read(DB_DELIVERY_KEY);
	const data = z.array(Delivery).parse(JSON.parse(store || '[]'));
	const items = parseDeliverymodel(data);
	if (text.length === 0) return items;
	const options = {
		includeScore: true,
		keys: ['technician.name', 'platform.name', 'drone.serial'],
	};
	const fuse = new Fuse(items, options);
	const result = fuse.search(text).map(({ item }) => item);
	return result;
}

export default searchDelivery;
