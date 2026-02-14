import { Schema, model } from 'mongoose';
import { TFooter } from './footer.interface';

const footerSchema = new Schema<TFooter>(
  {
    partnerOne: { type: String, required: true },
    partnerTwo: { type: String, required: true },
    date: { type: String, required: true },
    footerNote: { type: String },
  },
  {
    timestamps: true,
  },
);

export const FooterFr = model<TFooter>('FooterFr', footerSchema);
