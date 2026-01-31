import { Request, Response } from 'express';
import { GuestInfoServices } from './guestInfo.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import AppError from '../../error/appError';
import { fileUploader } from '../../helper/fileUploder';

const getGuestInfo = catchAsync(async (req: Request, res: Response) => {
  const result = await GuestInfoServices.getGuestInfo();

  if (!result) {
    throw new AppError(404, 'Guest info not found');
  }

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Guest info retrieved successfully',
    data: result,
  });
});

const updateGuestInfo = catchAsync(async (req: Request, res: Response) => {
  if (req.files && Array.isArray(req.files)) {
    const uploadPromises = (req.files as Express.Multer.File[]).map((file) =>
      fileUploader.uploadToCloudinary(file),
    );
    const results = await Promise.all(uploadPromises);

    // Initialize gallery if it doesn't exist and assign the new image URLs
    req.body.gallery = req.body.gallery || {};
    req.body.gallery.images = results.map((img) => img.url);
  }
  const result = await GuestInfoServices.updateGuestInfo(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Guest info updated successfully',
    data: result,
  });
});

export const GuestInfoControllers = {
  getGuestInfo,
  updateGuestInfo,
};
