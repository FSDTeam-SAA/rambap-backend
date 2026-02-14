import { Schema, model } from 'mongoose';
import { TWeddingMenu, TMenuCategory } from './weddingMenu.interface';

const menuCategorySchema = new Schema<TMenuCategory>({
  categoryName: { type: String, required: true },
  items: [{ type: String, required: true }],
});

const weddingMenuSchema = new Schema<TWeddingMenu>(
  {
    title: { type: String },
    menuSections: [menuCategorySchema],
  },
  {
    timestamps: true,
  },
);

export const WeddingMenuFr = model<TWeddingMenu>(
  'WeddingMenuFr',
  weddingMenuSchema,
);
