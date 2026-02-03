import { Schema, model } from 'mongoose';
import { TDayProgram, TDayProgramItem } from './dayProgram.interface';

const dayProgramItemSchema = new Schema<TDayProgramItem>({
  time: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String },
  mapUrl: { type: String },
});

const dayProgramSchema = new Schema<TDayProgram>(
  {
    title: { type: String },
    subtitle: { type: String },
    items: [dayProgramItemSchema],
  },
  {
    timestamps: true,
  },
);

export const DayProgram = model<TDayProgram>('DayProgram', dayProgramSchema);
