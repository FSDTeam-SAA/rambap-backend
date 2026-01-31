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
    printMenuUrl: { type: String },
  },
  {
    timestamps: true,
  },
);

export const WeddingMenu = model<TWeddingMenu>(
  'WeddingMenu',
  weddingMenuSchema,
);
