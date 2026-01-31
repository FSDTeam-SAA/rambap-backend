import { z } from 'zod';

// For Creating User (Register)
const createUserSchema = z.object({
  body: z.object({
    firstName: z
      .string()
      .min(1, 'Name is required')
      .min(3, 'Name must be at least 3 characters'),
    lastName: z.string().optional(),
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Invalid email address'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(6, 'Password must be at least 6 characters'),
    role: z.enum(['admin', 'client']),
  }),
});

// For Updating User (Personal Details)
// const updateUserSchema = z.object({
//   body: z.object({
//     name: z.string().min(3).optional(),
//     phone: z.string().optional(),
//     about: z.string().optional(),
//     address: z.string().optional(),
//     language: z.string().optional(),
//   }),
// });

export const UserValidation = {
  createUserSchema,
  // updateUserSchema,
};
