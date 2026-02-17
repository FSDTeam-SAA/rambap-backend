import { Schema, model } from 'mongoose';
import { TEvent } from './event.interface';

const eventSchema = new Schema<TEvent>(
  {
    title: { type: String },
    subtitle: { type: String },
    venueName: { type: String, required: true },
    ceremonyTitle: { type: String },
    ceremonyTime: { type: String },
    weddingTitle: { type: String },
    weddingTime: { type: String },
    receptionTitle: { type: String },
    receptionTime: { type: String },
    address: { type: String },
    mapEmbedUrl: { type: String },
    mapLocationTitle: { type: String },
    mapLocationLink: { type: String },
    transportationTitle: { type: String },
    transportationInfo: { type: String },
  },
  {
    timestamps: true,
  },
);

export const EventFr = model<TEvent>('EventFr', eventSchema);
