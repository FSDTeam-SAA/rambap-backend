import { Gallery } from './gallery.model';
import { TGallery } from './gallery.interface';

const getGallery = async () => {
  return await Gallery.findOne();
};

// Add Images (Append) & Update Text
const updateGallery = async (payload: Partial<TGallery>) => {
  const { images, ...textData } = payload;

  const updateQuery: any = { $set: textData };

  if (images && images.length > 0) {
    updateQuery.$addToSet = { images: { $each: images } };
  }

  return await Gallery.findOneAndUpdate({}, updateQuery, {
    new: true,
    upsert: true,
  });
};

// Delete ONE Image
const deleteImage = async (imageUrl: string) => {
  return await Gallery.findOneAndUpdate(
    {},
    { $pull: { images: imageUrl } }, // Remove specific URL
    { new: true },
  );
};

// Delete ALL
const deleteGallery = async () => {
  return await Gallery.deleteMany({});
};

export const GalleryServices = {
  getGallery,
  updateGallery,
  deleteImage,
  deleteGallery,
};
