import { z } from 'zod';

const updateFooter = z.object({
  body: z.object({
    partnerOne: z.string().optional(),
    partnerTwo: z.string().optional(),
    date: z.string().optional(),
    footerNote: z.string().optional(),
  }),
});

export const FooterVal = {
  updateFooter,
};
