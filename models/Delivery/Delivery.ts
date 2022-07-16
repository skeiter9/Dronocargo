import z from 'zod';
import { Drone } from '../Drone/Drone';
import { Platform } from '../Platform/Platform';
import { Technician } from '../Technician/Technician';

export const DB_DELIVERY_KEY = '$$$_DELIVERY_';

export const Delivery = z.object({
	id: z.string().min(2),
	status: z.string(),
	technicalCheck: z.string(),
	orderId: z.string().min(2),
	technicianId: z.string(),
	platformId: z.string(),
	droneId: z.string(),
});

export const DeliveryForm = z.object({
	orderId: z.string().min(2),
	technicianId: z.string(),
	platformId: z.string(),
	droneId: z.string(),
});

export const DeliveryModel = Delivery.extend({
	technician: Technician,
	platform: Platform,
	drone: Drone,
});

export type Delivery = z.infer<typeof Delivery>;
export type DeliveryForm = z.infer<typeof DeliveryForm>;
export type DeliveryModel = z.infer<typeof DeliveryModel>;
