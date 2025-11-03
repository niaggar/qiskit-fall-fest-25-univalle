import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const invitados = defineCollection({
	loader: glob({ base: './src/content/invitados', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			nombre: z.string(),
			bio: z.string(),
			foto: image().optional(),
			afiliacion: z.string().optional(),
		}),
});

const agenda = defineCollection({
	loader: glob({ base: './src/content/agenda', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			evento: z.string(),
			descripcion: z.string(),
			ponente: z.string().optional(),
			fecha: z.string(),
			hora_inicio: z.string(),
			hora_fin: z.string(),
			lugar: z.string().optional(),
		}),
});

export const collections = { invitados, agenda };
