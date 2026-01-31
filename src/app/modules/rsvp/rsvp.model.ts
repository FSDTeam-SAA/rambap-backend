import { Schema, model } from 'mongoose';
import { TRsvp } from './rsvp.interface';

const rsvpSchema = new Schema<TRsvp>(
  {
    guestName: { type: String, required: true },
    attendance: { type: Boolean, required: true },
    guestNumber: { type: Number, min: 1 },
    mealPreference: { type: String },
    message: { type: String },
  },
  {
    timestamps: true,
  },
);

export const Rsvp = model<TRsvp>('Rsvp', rsvpSchema);
