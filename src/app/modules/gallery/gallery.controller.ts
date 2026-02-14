import { Request, Response } from 'express';
import { GalleryServices } from './gallery.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { fileUploader } from '../../helper/fileUploder';

const getGallery = catchAsync(async (req, res) => {
  const language = (req.query.lang as string) || 'english';
  const result = await GalleryServices.getGallery(language);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Fetched successfully',
    data: result,
  });
});

const updateGallery = catchAsync(async (req, res) => {
  const language = (req.query.lang as string) || 'english';
  if (req.body.data) req.body = JSON.parse(req.body.data);

  if (req.files && Array.isArray(req.files)) {
    const files = req.files as Express.Multer.File[];
    const uploadPromises = files.map((file) =>
      fileUploader.uploadToCloudinary(file),
    );
    const results = await Promise.all(uploadPromises);
    req.body.images = results.map((r) => r.url);
  }

  const result = await GalleryServices.updateGallery(req.body, language);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Gallery updated',
    data: result,
  });
});

const deleteImage = catchAsync(async (req, res) => {
  const language = (req.query.lang as string) || 'english';
  const { imageUrl } = req.body; // Expect { "imageUrl": "..." }
  const result = await GalleryServices.deleteImage(imageUrl, language);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Image deleted',
    data: result,
  });
});

const deleteGallery = catchAsync(async (req, res) => {
  const language = (req.query.lang as string) || 'english';
  const result = await GalleryServices.deleteGallery(language);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Gallery deleted',
    data: result,
  });
});

export const GalleryControllers = {
  getGallery,
  updateGallery,
  deleteImage,
  deleteGallery,
};
