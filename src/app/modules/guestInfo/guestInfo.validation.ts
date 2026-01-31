import { z } from 'zod';

// Sub-Schemas
const linkItem = z.object({
  title: z.string().optional(),
  icon: z.string().optional(),
  linkUrl: z.string().url().optional(),
  description: z.string().optional(),
});

const dressCodeItem = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  icon: z.string().optional(),
});

const faqItem = z.object({
  question: z.string().optional(),
  answer: z.string().optional(),
});

// Main Schema
const updateGuestInfo = z.object({
  body: z.object({
    gallery: z
      .object({
        title: z.string().optional(),
        subtitle: z.string().optional(),
        images: z.array(z.string().url()).optional(),
      })
      .optional(),

    accommodation: z
      .object({
        title: z.string().optional(),
        subtitle: z.string().optional(),
        items: z.array(linkItem).optional(),
      })
      .optional(),

    carRental: z
      .object({
        title: z.string().optional(),
        subtitle: z.string().optional(),
        items: z.array(linkItem).optional(),
      })
      .optional(),

    dressCode: z
      .object({
        title: z.string().optional(),
        items: z.array(dressCodeItem).optional(),
        footerNote: z.string().optional(),
      })
      .optional(),

    faq: z
      .object({
        title: z.string().optional(),
        items: z.array(faqItem).optional(),
      })
      .optional(),

    gifts: z
      .object({
        title: z.string().optional(),
        subtitle: z.string().optional(),
        description: z.string().optional(),
      })
      .optional(),
  }),
});

export const GuestInfoVal = {
  updateGuestInfo,
};
