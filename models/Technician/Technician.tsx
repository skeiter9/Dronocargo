import z from 'zod';

export const DB_DELIVERY_KEY = '$$TECHNICIAN';

export const Technician = z.object({
	id: z.string(),
	name: z.string(),
});

export type Technician = z.infer<typeof Technician>;
