import { Schema, model } from 'mongoose';
import { THero } from './hero.interface';

const heroSchema = new Schema<THero>(
  {
    topMessage: {
      type: String,
    },
    partnerOne: {
      type: String,
      required: true,
    },
    partnerTwo: {
      type: String,
      required: true,
    },
    weddingDate: {
      type: String,
    },
    bottomMessage: {
      type: String,
    },
    videoUrl: {
      type: String,
    },
    countdownTitle: {
      type: String,
    },
    countdownSubtitle: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const HeroFr = model<THero>('HeroFr', heroSchema);
