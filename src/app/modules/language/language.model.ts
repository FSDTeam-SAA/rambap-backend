import { Schema, model } from 'mongoose';
import { TLanguage } from './language.interface';

const languageSchema = new Schema<TLanguage>(
  {
    language: {
      type: String,
      enum: ['english', 'france'],
      default: 'english',
    },
  },
  {
    timestamps: true,
  },
);

export const Language = model<TLanguage>('Language', languageSchema);
