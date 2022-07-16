import db from '../../../db/db.json';
import { Delivery, DeliveryModel } from '../Delivery';

function parseDeliverymodel(_items: Delivery[]): DeliveryModel[] {
	const technicians = db.technicians;
	const platforms = db.platforms;
	const drones = db.drones;
	const items = _items
		.map((item) => {
			const technician = technicians.find((t) => t.id === item.technicianId);
			const platform = platforms.find((p) => p.id === item.platformId);
			const drone = drones.find((d) => d.id === item.droneId);
			return { ...item, technician, platform, drone };
		})
		.filter(
			(item) => item.platform && item.drone && item.technician
		) as DeliveryModel[];
	return items;
}

export default parseDeliverymodel;
