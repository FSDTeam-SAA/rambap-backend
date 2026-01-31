import { Schema, model } from 'mongoose';
import { TEvent } from './event.interface';

const eventSchema = new Schema<TEvent>(
  {
    title: { type: String },
    subtitle: { type: String },
    venueName: { type: String, required: true },
    ceremonyTime: { type: String, required: true },
    banquetTime: { type: String, required: true },
    address: { type: String, required: true },
    mapEmbedUrl: { type: String, required: true },
    mapLocationLink: { type: String, required: true },
    transportationTitle: { type: String },
    transportationInfo: { type: String },
  },
  {
    timestamps: true,
  },
);

export const Event = model<TEvent>('Event', eventSchema);
