import { z } from 'zod';

// Sub-schemas
const programItem = z.object({
  time: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  icon: z.string().optional(),
  mapUrl: z.string().url({ message: 'Invalid URL' }).optional(),
});

const menuCat = z.object({
  categoryName: z.string().optional(),
  items: z.array(z.string()).optional(),
});

// Main Schemas
const updateProgram = z.object({
  body: z.object({
    data: z
      .string()
      .transform((str, ctx) => {
        try {
          return JSON.parse(str);
        } catch (e) {
          ctx.addIssue({ code: 'custom', message: 'Invalid JSON format' });
          return z.NEVER;
        }
      })
      .pipe(
        z.object({
          title: z.string().optional(),
          subtitle: z.string().optional(),
          items: z.array(programItem).optional(),
          printUrl: z.string().url({ message: 'Invalid URL' }).optional(),
        }),
      ),
  }),
});

const updateMenu = z.object({
  body: z.object({
    title: z.string().optional(),
    menuSections: z.array(menuCat).optional(),
    printMenuUrl: z.string().url({ message: 'Invalid URL' }).optional(),
  }),
});

export const DetailsVal = {
  updateProgram,
  updateMenu,
};
