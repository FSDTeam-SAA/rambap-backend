import { Gallery } from './gallery.model';
import { TGallery } from './gallery.interface';
import { GalleryFr } from './gallery.model.fr';

const getGallery = async (language: string = 'english') => {
  const Model = language === 'france' ? GalleryFr : Gallery;
  return await Model.findOne();
};

// Add Images (Append) & Update Text
const updateGallery = async (
  payload: Partial<TGallery>,
  language: string = 'english',
) => {
  const Model = language === 'france' ? GalleryFr : Gallery;
  const { images, ...textData } = payload;

  const updateQuery: any = { $set: textData };

  if (images && images.length > 0) {
    // Append new images to the existing array without duplicates
    updateQuery.$addToSet = { images: { $each: images } };
  }

  return await Model.findOneAndUpdate({}, updateQuery, {
    new: true,
    upsert: true,
  });
};

// Delete ONE Image
const deleteImage = async (imageUrl: string, language: string = 'english') => {
  const Model = language === 'france' ? GalleryFr : Gallery;
  return await Model.findOneAndUpdate(
    {},
    { $pull: { images: imageUrl } }, // Remove specific URL
    { new: true },
  );
};

// Delete ALL
const deleteGallery = async (language: string = 'english') => {
  const Model = language === 'france' ? GalleryFr : Gallery;
  return await Model.deleteMany({});
};

export const GalleryServices = {
  getGallery,
  updateGallery,
  deleteImage,
  deleteGallery,
};
