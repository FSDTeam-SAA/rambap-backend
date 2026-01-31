import express from 'express';
import { GalleryControllers } from './gallery.controller';
import { fileUploader } from '../../helper/fileUploder';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', GalleryControllers.getGallery);

router.put(
  '/',
  auth(),
  fileUploader.upload.array('files'),
  GalleryControllers.updateGallery,
);

// Delete ONE specific image (Send JSON: { "imageUrl": "..." })
router.delete('/image', auth(), GalleryControllers.deleteImage);

// Delete ALL
router.delete('/', auth(), GalleryControllers.deleteGallery);

export const GalleryRoutes = router;
