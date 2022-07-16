import z from 'zod';

export const DB_PLATFORM_KEY = '$$PLATFORMS';

export const Platform = z.object({
	id: z.string(),
	name: z.string(),
});

export type Platform = z.infer<typeof Platform>;
