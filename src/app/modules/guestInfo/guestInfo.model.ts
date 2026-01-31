import { Schema, model } from 'mongoose';
import {
  TGuestInfo,
  TLinkItem,
  TDressCodeItem,
  TFaqItem,
} from './guestInfo.interface';

// Sub-Schemas

const linkItemSchema = new Schema<TLinkItem>({
  title: { type: String, required: true },
  icon: { type: String },
  linkUrl: { type: String, required: true },
  description: { type: String },
});

const dressCodeItemSchema = new Schema<TDressCodeItem>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String },
});

const faqItemSchema = new Schema<TFaqItem>({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

// Main Schema

const guestInfoSchema = new Schema<TGuestInfo>(
  {
    gallery: {
      title: { type: String },
      subtitle: { type: String },
      images: [{ type: String }],
    },
    accommodation: {
      title: { type: String },
      subtitle: { type: String },
      items: [linkItemSchema],
    },
    carRental: {
      title: { type: String },
      subtitle: { type: String },
      items: [linkItemSchema],
    },
    dressCode: {
      title: { type: String },
      items: [dressCodeItemSchema],
      footerNote: { type: String },
    },
    faq: {
      title: { type: String },
      items: [faqItemSchema],
    },
    gifts: {
      title: { type: String },
      subtitle: { type: String },
      description: { type: String },
    },
  },
  {
    timestamps: true,
  },
);

export const GuestInfo = model<TGuestInfo>('GuestInfo', guestInfoSchema);
