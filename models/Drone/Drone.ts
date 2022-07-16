import z from 'zod';

export const DB_DRONE_KEY = '$$DRONES';

export const Drone = z.object({
	id: z.string(),
	serial: z.string(),
});

export type Drone = z.infer<typeof Drone>;
