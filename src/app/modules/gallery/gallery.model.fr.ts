import { Schema, model } from 'mongoose';
import { TGallery } from './gallery.interface';

const gallerySchema = new Schema<TGallery>(
  {
    title: { type: String },
    subtitle: { type: String },
    images: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

export const GalleryFr = model<TGallery>('GalleryFr', gallerySchema);
