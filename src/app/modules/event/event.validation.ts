import { z } from 'zod';

const updateEventValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    venueName: z.string().optional(),
    ceremonyTime: z.string().optional(),
    banquetTime: z.string().optional(),
    address: z.string().optional(),
    mapEmbedUrl: z.string().url({ message: 'Invalid URL format' }).optional(),
    mapLocationLink: z
      .string()
      .url({ message: 'Invalid URL format' })
      .optional(),
    transportationTitle: z.string().optional(),
    transportationInfo: z.string().optional(),
  }),
});

export const EventValidation = {
  updateEventValidationSchema,
};
