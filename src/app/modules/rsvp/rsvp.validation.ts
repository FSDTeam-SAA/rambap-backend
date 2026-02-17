import { z } from 'zod';

const createRsvp = z.object({
  body: z.object({
    guestName: z.string({ required_error: 'Name is required' }),
    attendance: z.boolean({
      required_error: 'Attendance status is required',
    }),
    guestNumber: z.number().optional(),
    mealPreference: z.string().optional(),
    message: z.string().optional(),
  }),
  // .refine(
  //   (data) => {
  //     if (data.attendance === true) {
  //       return data.guestNumber !== undefined && data.guestNumber >= 1;
  //     }
  //     return true;
  //   },
  //   {
  //     message: 'Guest number must be at least 1 if you are attending',
  //     path: ['guestNumber'],
  //   },
  // ),
});

export const RsvpVal = {
  createRsvp,
};
