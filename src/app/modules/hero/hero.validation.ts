import { z } from 'zod';

const updateHeroValidationSchema = z.object({
  body: z.object({
    topMessage: z.string().optional(),
    partnerOne: z.string().optional(),
    partnerTwo: z.string().optional(),
    weddingDate: z.string().optional(),
    bottomMessage: z.string().optional(),
    videoUrl: z.string().url({ message: 'Invalid URL format' }).optional(),
    countdownTitle: z.string().optional(),
    countdownSubtitle: z.string().optional(),
  }),
});

export const HeroValidation = {
  updateHeroValidationSchema,
};
